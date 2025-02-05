import React from "react";
import "../styles/filters.css";

const Filters = () => {
  return (
    <>
      <div className="filter">
        <ul>
          <li className="active-filter">All</li>

          <li>Open</li>
          <li>Closed</li>
          <li>Archived</li>
        </ul>
      </div>
    </>
  );
};

export default Filters;
