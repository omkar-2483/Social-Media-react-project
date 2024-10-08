import "./Share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useQueryClient, useMutation } from "react-query";
import { makeRequest } from "../../../Axios";

const Share = () => {
  const { currUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleShare = (e) => {
    e.preventDefault();
    mutation.mutate({desc});
    setDesc("");
    setFile(null);
  };

  return (
    <div className={`share share-${darkMode && "dark"}`}>
      <div className="container">
        <div className="top">
          <img src={currUser.profilePic} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind ${currUser.name}?`}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.file[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleShare}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
