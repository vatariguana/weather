import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { getDataWeather } from "../../redux/Actions";
import "./index.scss";

const TitleCity = () => {
  const dispatch = useDispatch();
  const { getWeatherAll } = useSelector(({ WeatherReducer }) => WeatherReducer);

  useEffect(() => {
    dispatch(getDataWeather());
  }, []);
  let dateParse = "";
  if (getWeatherAll?.current?.dt) {
    dateParse = format(
      new Date(getWeatherAll?.current?.dt * 1000),
      "dd MMM yyyy"
    );
  }
  return (
    <div className="titlecity-container">
      <div className="item">
        <label>{getWeatherAll?.timezone}</label>
        <label>{dateParse}</label>
      </div>
    </div>
  );
};
export default TitleCity;
