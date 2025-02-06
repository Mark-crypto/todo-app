import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <h5 style={{ backgroundColor: "#f4f4f4" }}>TO DO APP</h5>

      <div className="nav-links">
        <ul>
          <li>
            <a href="/message">Messages</a>
          </li>
          <li>
            <a href="/" className="active">
              Today's Task
            </a>
          </li>
          <li>
            <a href="/last-activity">Last Activity</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
