import React from "react";

const Posts = ({ posts, isLoading }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </div>
  );
};

export default Posts;
