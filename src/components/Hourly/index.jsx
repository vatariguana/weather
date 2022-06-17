import { format } from "date-fns";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataWeather } from "../../redux/Actions";
import SkeletonFordailyAndHourly from "../SkeletonForDailyAndHourly";
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
  const tempDailyLimit10 = tempDaily?.slice(0, 10);

  return (
    <div className="hourly-container">
      <div className="title-container">
        {isLoading ? (
          <>
            <SkeletonFordailyAndHourly />
            <SkeletonFordailyAndHourly />
            <SkeletonFordailyAndHourly />
            <SkeletonFordailyAndHourly />
            <SkeletonFordailyAndHourly />
            <SkeletonFordailyAndHourly />
            <SkeletonFordailyAndHourly />
            <SkeletonFordailyAndHourly />
            <SkeletonFordailyAndHourly />
          </>
        ) : (
          <label className="daily-title">
            Pronóstico por horas de tres dias
          </label>
        )}
      </div>
      <div className="items-container">
        <div className="container-hourly">
          {tempDaily &&
            tempDaily?.map((item) => {
              return (
                <div className="items-data-container">
                  <div className="item-container">
                    <label className="item">
                      {format(new Date(item?.dt * 1000), "E H aaa")}
                    </label>
                  </div>
                  <div className="item-container">
                    <img
                      src={
                        "http://openweathermap.org/img/wn/" +
                        item?.weather[0].icon +
                        "@2x.png"
                      }
                      className="image-icono"
                      alt="icono"
                    />
                  </div>
                  <div className="item-container">
                    <label className="item">
                      {parseInt(item?.temp - 273.15).toFixed(0) + "°C"}
                    </label>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default HourlyWeather;
