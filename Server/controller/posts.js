import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";



//get all posts of user and followed users
export const getPosts = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(404).json("Not logged in");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("token not valid!");

    const q = `SELECT p.*, u.id AS userId, u.name, u.profilePic FROM posts AS p JOIN users AS u ON (u.id=p.userId)
    LEFT JOIN relationships AS r ON (p.userId= r.followedUser) WHERE r.followerUser=? OR p.userId=?
    ORDER BY p.createdAt DESC`;

    db.query(q, [userInfo.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      // console.log(data);
      return res.status(200).json(data);
    });
  });
};


//add post
export const addPost =(req, res)=>{
  const token = req.cookies.accessToken;

  if (!token) return res.status(404).json("Not logged in");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("token not valid!");

    const q = "INSERT INTO posts (`desc`, `img`, `userId`, `createdAt`) VALUES(?)";

    const values=[
      req.body.desc,
      req.body.img,
      userInfo.id,
      moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    ]

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      // console.log(data);
      return res.status(200).json("post has been created");
    });
  });
}
