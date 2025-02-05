import React from "react";
import "../styles/single-activity.css";
import { ImCheckboxChecked } from "react-icons/im";
import { IoPersonCircle } from "react-icons/io5";

const SingleActivity = () => {
  return (
    <>
      <div className="card">
        <div className="card-top">
          <div className="card-title">
            <h5>Client Review & Feedback</h5>
            <p style={{ color: "gray" }}>Crypto wallet redesign</p>
          </div>
          <div
            className="card-check"
            style={{ fontSize: "20px", color: "blue" }}
          >
            <ImCheckboxChecked />
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-time">
            <p style={{ color: "gray" }}>
              {" "}
              <b>Today</b> 10:00 AM - 12:00 PM
            </p>
          </div>
          <div className="card-photo" style={{ fontSize: "30px" }}>
            <IoPersonCircle />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleActivity;
