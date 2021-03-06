import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post}/>
      ))}
    </div>
  );
};

export default Posts;
