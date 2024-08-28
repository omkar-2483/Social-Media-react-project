import Post from "../post/Post";
import "./Posts.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../../Axios";

function Posts() {
  const { isLoading, error, posts } = useQuery("posts", () => 
    makeRequest.get('/posts').then((res)=>{
      return res.data;
    })
  );

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
