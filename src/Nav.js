import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        {/*this will be the avatar*/}
        <img
          src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
