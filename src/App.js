import React, { useState } from "react";
// import SearchBar from "./components/SearchBar"
import Home from "./views/Home";
import CurrentWeather from "./components/CurrentWeather";
// import DailyWeather from "./components/Daily";
import TitleCity from "./components/TitleCity";
// import HourlyWeather from "./components/Hourly";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <div className="components">
        <TitleCity />
      </div>
      <div className="components">
        <CurrentWeather />
      </div>
      <div className="components">
        <Home />
      </div>
    </div>
  );
}

export default App;
