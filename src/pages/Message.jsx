import React from "react";
import "../styles/message.css";
import Navbar from "../components/Navbar";

const Message = () => {
  return (
    <>
      <Navbar />
      <div
        className="message"
        style={{ backgroundColor: "#f4f4f4", height: "100vh", padding: "20px" }}
      >
        <div className="notification">
          <h5 style={{ textDecoration: "underline" }}>Notification</h5>
          <div className="notification-content" style={{ marginTop: "-10px" }}>
            <h6>New Feature Alert!!</h6>
            <p>
              We have released the new AI. To help you plan out your day
              sufficiently.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
