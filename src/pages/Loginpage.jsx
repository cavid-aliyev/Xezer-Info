import React from "react";

const Loginpage = () => {
  return (
    <div className="login">
      <span className="loginTitle">Giriş</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Şifrə</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Giriş</button>
      </form>
      <button className="loginRegisterButton">Qeydiyyatdan keç</button>
    </div>
  );
};

export default Loginpage;
