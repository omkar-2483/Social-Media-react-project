import Post from "../post/Post";
import "./Posts.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../../Axios";

function Posts() {
  const { isLoading, error, data } = useQuery("posts", () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );

  return (
    <div className="posts">
      {error
        ? "Something went wrong"
        : isLoading
        ? " Loading...."
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export default Posts;
