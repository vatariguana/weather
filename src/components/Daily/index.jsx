import { format } from "date-fns";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataWeather } from "../../redux/Actions";
import SkeletonFordailyAndHourly from "../SkeletonForDailyAndHourly";
import SkeletonTitle from "../TitleCity/components/SkeletonTitle";
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

  console.log(tempDaily, "daily info");
  return (
    <div className="daily-container">
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
          <label className="daily-title">Pronóstico de 8 días</label>
        )}
      </div>
      <div className="container-items">
        <div className="container-daily">
          {tempDaily?.map((item) => {
            return (
              <div className="daily-table">
                <div className="item">
                  <label className="daily-td">
                    {format(new Date(item?.dt * 1000), "E-dd")}
                  </label>
                </div>
                <div className="item">
                  <img
                    className="image-icono"
                    src={
                      "http://openweathermap.org/img/wn/" +
                      item?.weather[0].icon +
                      "@2x.png"
                    }
                    alt="icono"
                  />
                </div>
                <div className="item">
                  <label className="daily-td">
                    {parseInt(item?.temp?.max - 273.15).toFixed(0) + "°C"} /
                    {parseInt(item?.temp?.min - 273.15).toFixed(0) + "°C"}
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
export default DailyWeather;
