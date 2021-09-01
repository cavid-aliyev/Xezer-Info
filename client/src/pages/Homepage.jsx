import React from "react";
import { useLocation } from "react-router";
import { Sidebar, Header, Posts } from "../components";
import axios from "axios";

const Homepage = () => {
  const [posts, setPosts] = React.useState([]);

  //using query in axios
  const { search } = useLocation();

  //getting posts from api
  React.useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts" + search);
      setPosts(response.data);
    };
    fetchPosts();
  }, [search]);

  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Homepage;
