import { format } from "date-fns";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataWeather } from "../../redux/Actions";
import "./index.scss";
const DailyWeather = () => {
  const dispatch = useDispatch();
  const { getWeatherAll, isLoading } = useSelector(
    ({ WeatherReducer }) => WeatherReducer
  );

  useEffect(() => {
    dispatch(getDataWeather());
  }, []);
  const tempDaily = getWeatherAll?.daily?.map((item) => {
    return item;
  });

  // console.log(tempDaily, "daily info");
  return (
    <div className="daily-container">
      {isLoading ? (
        <label>...Cargando</label>
      ) : (
        <label className="daily-title">Pronóstico de 8 días</label>
      )}
      {tempDaily &&
        tempDaily?.map((item) => {
          return (
            <div className="daily-table">
              <label className="daily-td">
                {format(new Date(item?.dt * 1000), "dd-MMM-yyyy")}
              </label>
              <label className="daily-td">
                {parseInt(item?.temp?.max - 273.15).toFixed(0) + "°C"}
              </label>
              <label className="daily-td">
                {parseInt(item?.temp?.min - 273.15).toFixed(0) + "°C"}
              </label>
              <label className="daily-td">{item?.weather[0].main}</label>
            </div>
          );
        })}
    </div>
  );
};
export default DailyWeather;
