import { format } from "date-fns";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataWeather } from "../../redux/Actions";
import "./index.scss";
const HourlyWeather = () => {
  const dispatch = useDispatch();
  const { getWeatherAll, isLoading } = useSelector(
    ({ WeatherReducer }) => WeatherReducer
  );

  useEffect(() => {
    dispatch(getDataWeather());
  }, []);
  const tempDaily = getWeatherAll?.hourly?.map((item) => {
    return item;
  });
  console.log(tempDaily, "hora info");
  return (
    <div className="hourly-container">
      {tempDaily &&
        tempDaily?.map((item) => {
          return (
            <div className="items-container">
              <label className="item">
                {new Date(item?.dt * 1000).toString()}
              </label>
              <label className="item">
                {parseInt(item?.temp - 273.15).toFixed(0) + "°C"}
              </label>
              <label className="item">{item.weather[0].main}</label>
            </div>
          );
        })}
    </div>
  );
};
export default HourlyWeather;
