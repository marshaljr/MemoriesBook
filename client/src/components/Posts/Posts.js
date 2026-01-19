import Post from "./Post/Post.js";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <h2>New Posts</h2>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
