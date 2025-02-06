import React from "react";
import "../styles/today.css";
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import Filters from "../components/Filters";
import SingleActivity from "../components/SingleActivity";

const Today = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: "#f4f4f4", height: "100vh", padding: "20px" }}
      >
        <div className="section1">
          <div className="section1A">
            <h1>Today's Task</h1>
            <h4>
              {days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}
            </h4>
          </div>
          <div className="section1B">
            <a href="/new-task">
              <Button variant="primary" style={{ fontWeight: "bold" }}>
                <span style={{ fontSize: "20px" }}>+</span> New Task
              </Button>
            </a>
          </div>
        </div>
        <Filters />
        <SingleActivity />
      </div>
    </>
  );
};

export default Today;
