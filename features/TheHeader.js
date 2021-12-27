import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";
import Style from "./TheHeader.module.css";

const TheHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar ">
      <NavLink className="navbar-br p-3 " to="/Album">
        <h2 className={Style.title}> DKT MUSIC</h2>
      </NavLink>

      <NavLink className={Style.title} to="/Favoris">
        <h4>
          {" "}
          <i class="fas fa-heart"></i>
        </h4>
      </NavLink>

      <a
        className={Style.title}
        href="https://fr.linkedin.com/in/demba-kante-68510714b"
      >
        <h4>
          <i className={`fab fa-linkedin text-primary ${Style.text}`}></i>
        </h4>
      </a>

      <NavLink className={Style.title} to="/Album/Name">
        <h2>
          <i class="fas fa-search"></i>
        </h2>
      </NavLink>

      <h6
        className={` ${Style.img} animate__animated animate__flip animate__infinite`}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Gold_record_icon.svg/40px-Gold_record_icon.svg.png" />
      </h6>
    </div>
  );
};

export default TheHeader;
