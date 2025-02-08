import React, { useState } from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h5 style={{ backgroundColor: "#f4f4f4" }}>TO DO APP</h5>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink
              to="/message"
              className={({ isActive }) => (isActive ? " active" : "nav-link")}
              style={{ paddingRight: "20px" }}
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? " active" : "nav-link")}
              style={{ paddingRight: "20px" }}
            >
              Today's Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/last-activity"
              className={({ isActive }) => (isActive ? " active" : "nav-link")}
              style={{ paddingRight: "20px" }}
            >
              Last Activity
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
