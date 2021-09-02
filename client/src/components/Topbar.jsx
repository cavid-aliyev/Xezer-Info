import { Link } from "react-router-dom";
import React from "react";
import { Context } from "../context/Context";

const Topbar = () => {
  const { user, dispatch } = React.useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <h2 className="logo-title">
          <Link className="link" to="/">
            Xəzər info
          </Link>
        </h2>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Ana səhifə
            </Link>
          </li>
          <li className="topListItem">Haqqımızda</li>
          <li className="topListItem">Əlaqə</li>
          <li className="topListItem">
            <Link className="link" to="/create">
              Post yarat
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Çıxış"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Giriş
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Qeydiyyatdan keç
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
