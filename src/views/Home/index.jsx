import React, { useState } from "react";
import DailyWeather from "../../components/Daily";
import HourlyWeather from "../../components/Hourly";
import TitleCity from "../../components/TitleCity";
import "./index.scss";
const Home = () => {
  const [showOptions, setShowOptions] = useState("");
  const onClickOptions = (value) => {
    setShowOptions(value);
  };
  return (
    <div className="home-container">
      <div className="item-container">
        <div className="item">
          <label className="item-label" onClick={() => onClickOptions("Daily")}>
            Daily
          </label>
          {showOptions === "Daily" && <DailyWeather />}
        </div>
        <div className="item">
          <label
            className="item-label"
            onClick={() => onClickOptions("Hourly")}
          >
            Hourly
          </label>
          {showOptions === "Hourly" && <HourlyWeather />}
        </div>
        <div className="item">
          <label className="item-label">Details</label>
        </div>
      </div>
    </div>
  );
};
export default Home;
