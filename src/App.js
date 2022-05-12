import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import TableCell from "./Components/Table/TableCell";
import TableCaption from "./Components/TableCaption/TableCaption";
import Search from "./Components/Search/Search";
import Paginator from "./Components/Paginator/Paginator";
const App = () => {
  const [posts, setPosts] = useState();
  const [flag, setFlag] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    getProductData();
  }, []);
  async function getProductData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    window.history.replaceState(null, "", `#${currentPage}`);
  }, [currentPage]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  const searchPosts = posts?.filter((post) => {
    return (
      post.body.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.id.toString().includes(searchValue.toLowerCase())
    );
  });

  const sortedPosts = (title) => {
    posts.sort((a, b) => {
      setFlag(!flag);
      const firstName = a[title];
      const secondName = b[title];
      if (firstName > secondName) {
   
        return -1;
      }
      if (firstName < secondName) {
  
        return 1;
      }
      return 0;
    });
    
  };
  return (
    <div className="container">
      <Search setSearchValue={setSearchValue} />
      <TableCaption sortedPosts={sortedPosts} />
      {searchValue === "" ? (
        <>
          {currentPosts?.map((post) => {
            return <TableCell post={post} key={post.id} />;
          })}
        </>
      ) : (
        <>
          {searchPosts?.map((post) => {
            return <TableCell post={post} key={post.id} />;
          })}
        </>
      )}
      <Paginator
        postsPerPage={postsPerPage}
        totalPost={posts?.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
