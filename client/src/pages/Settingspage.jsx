import React from "react";
import { Sidebar } from "../components";

const Settingspage = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Səhifəni yenilə</span>
          <span className="settingsTitleDelete">Səhifəni sil</span>
        </div>
        <form className="settingsForm">
          <label>Profil şəkli</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Ad</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Şifrə</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Yenilə
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settingspage;
