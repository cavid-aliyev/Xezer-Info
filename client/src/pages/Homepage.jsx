import React from "react";
import { useLocation } from "react-router";
import { Sidebar, Header, Posts } from "../components";
import axios from "axios";

const Homepage = () => {
  const [posts, setPosts] = React.useState([]);

  //getting posts from api
  const fetchPosts = async () => {
    const response = await axios.get("/posts");
    setPosts(response.data)
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
};

export default Homepage;
