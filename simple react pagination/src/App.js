import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Posts from './components/Posts';

function App() { 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response  = await axios.get(url);
    setPosts(response.data);
    setLoading(false)
    // console.log(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  //console.log(posts);

  //getCurrent post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change pageNumber
  const handlePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App container mt-5">
      <h1 className='text-primary mb-3'>My Pagination app</h1>
      <Posts posts={currentPost} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPost={posts.length} handlePage={handlePage} />
    </div>
  );
}

export default App;
