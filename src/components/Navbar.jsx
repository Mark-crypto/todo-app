import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <h6>TO DO APP</h6>

      <div className="nav-links">
        <ul>
          <li>
            <a href="/message">Messages</a>
          </li>
          <li>
            <a href="/today" className="active">
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
