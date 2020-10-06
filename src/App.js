import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import "./styles/main.scss";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 style={{ textAlign: "left", marginBottom: "1rem" }}>Posts</h1>
      <Posts posts={currentPosts} isLoading={isLoading} />
      <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
      />
    </div>
  );
};

export default App;
