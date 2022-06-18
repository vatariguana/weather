import React from "react";
import Home from "./views/Home";
import CurrentWeather from "./components/CurrentWeather";
import TitleCity from "./components/TitleCity";
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
