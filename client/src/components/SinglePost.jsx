import React from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = React.useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  React.useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={post.photo} alt="" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Müəllif:
            <Link to={`/?user=${post.username}`} className="link">
            <b className="singlePostAuthor">{post.username}</b>
            </Link>
          </span>
          <span> {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
