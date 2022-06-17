import React from "react";
import "./index.scss";
const SkeletonFordailyAndHourly = () => {
  return (
    <>
      <div className="skeleton-container">
        <div className="skeleton-container-items">
          <div className="item"></div>
        </div>
        <div className="skeleton-container-items">
          <div className="item"></div>
        </div>
        <div className="skeleton-container-items">
          <div className="item"></div>
        </div>
      </div>
    </>
  );
};

export default SkeletonFordailyAndHourly;
