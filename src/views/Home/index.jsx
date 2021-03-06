import React, { useState } from "react";
import DailyWeather from "../../components/Daily";
import HourlyWeather from "../../components/Hourly";
import "./index.scss";
const Home = () => {
  const [showOptions, setShowOptions] = useState("Daily");
  const onClickOptions = (value) => {
    setShowOptions(value);
  };
  return (
    <div className="home-container">
      <div className="item-container">
        <div className="titles-container">
          <label
            className={`item-label ${showOptions === "Daily" && "selected"}`}
            onClick={() => onClickOptions("Daily")}
          >
            Daily
          </label>
          <label
            className={`item-label ${showOptions === "Hourly" && "selected"}`}
            onClick={() => onClickOptions("Hourly")}
          >
            Hourly
          </label>
        </div>
        <div className="datos-container">
          <div className="item">
            {showOptions === "Daily" && <DailyWeather />}
          </div>
          <div className="item">
            {showOptions === "Hourly" && <HourlyWeather />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
