import { Link } from "react-router-dom";

const Topbar = () => {
  const user = true;

  return (
    <div className="top">
      <div className="topLeft">
        <h2 className="logo-title">Xəzər info</h2>
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
            <Link className="link" to="/write">
              Yaz
            </Link>
          </li>
          {user && <li className="topListItem">Çıxış</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
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
}


export default Topbar