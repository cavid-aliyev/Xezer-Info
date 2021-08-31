import React from "react";

const Registerpage = () => {
  return (
    <div className="register">
      <span className="registerTitle">Qeydiyyatdan keç</span>
      <form className="registerForm">
        <label>Ad</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Şifrə</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Qeydiyyatdan keç</button>
      </form>
      <button className="registerLoginButton">Daxil ol</button>
    </div>
  );
};

export default Registerpage;
