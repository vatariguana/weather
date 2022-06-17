import React from "react";
import "./index.scss";
const SkeletonCurrent = () => {
  return (
    <>
      <div className="skeleton-currentWeather-container">
        <div className="item"> </div>
        <div className="item"></div>
      </div>
    </>
  );
};

export default SkeletonCurrent;
