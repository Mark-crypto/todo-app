import React from "react";
import "../styles/lastactivity.css";
import Navbar from "../components/Navbar";

const LastActivity = () => {
  return (
    <>
      <Navbar />
      <div
        className="lastactivity"
        style={{ backgroundColor: "#f4f4f4", height: "100vh", padding: "20px" }}
      >
        <div className="activity">
          <h6 style={{ textDecoration: "underline" }}>Completed Activity</h6>
          <p>
            You marked client review & feedback as completed at{" "}
            <span style={{ color: "black" }}>12:00PM today</span>.
          </p>
        </div>
        <div className="activity">
          <h6 style={{ textDecoration: "underline" }}>Deleted Activity</h6>
          <p>
            You deleted your planned shopping experience at{" "}
            <span style={{ color: "black" }}>10:00AM today</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default LastActivity;
