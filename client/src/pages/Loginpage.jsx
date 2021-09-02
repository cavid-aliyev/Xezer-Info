import React from "react";
import { Context } from "../context/Context";
import axios from "axios";

const Loginpage = () => {
  const userRef = React.useRef();
  const passwordRef = React.useRef();
  const { dispatch, isFetching } = React.useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Giriş</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Ad</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Şifrə</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching }>
          Giriş
        </button>
      </form>
      <button className="loginRegisterButton">Qeydiyyatdan keç</button>
    </div>
  );
};

export default Loginpage;
