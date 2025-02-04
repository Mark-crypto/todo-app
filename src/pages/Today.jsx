import React from "react";
import "../styles/today.css";
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";

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
      <div className="section1">
        <div className="section1A">
          <h1>Today's Task</h1>
          <h4>
            {days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}
          </h4>
        </div>
        <div className="section1B">
          <Button variant="primary">+ New Task</Button>
        </div>
      </div>
    </>
  );
};

export default Today;
