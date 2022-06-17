import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataWeather } from "../../redux/Actions";
import SkeletonTitle from "../TitleCity/components/SkeletonTitle";
import SkeletonCurrent from "./components/SkeletonCurrent";
import "./index.scss";
const CurrentWeather = () => {
  const dispatch = useDispatch();
  const { getWeatherAll, isLoading } = useSelector(
    ({ WeatherReducer }) => WeatherReducer
  );

  useEffect(() => {
    dispatch(getDataWeather());
  }, []);
  const gradosFarenheit = getWeatherAll?.current?.temp;

  const gradosCelsius = parseInt((gradosFarenheit - 273.15).toFixed(1));
  return (
    <>
      <div className="currentWeather-container">
        <div className="items-container">
          {getWeatherAll?.current?.weather?.map((item) => {
            return (
              <div className="item">
                <img
                  src={
                    "http://openweathermap.org/img/wn/" + item?.icon + "@2x.png"
                  }
                  className="item-image"
                  alt="icono"
                ></img>
                <label className="item-name">{item?.main}</label>
              </div>
            );
          })}
        </div>
        <div className="items-container">
          {isLoading ? (
            <>
              {" "}
              <SkeletonCurrent />
            </>
          ) : (
            <label className="item-temp">{gradosCelsius}°</label>
          )}
        </div>
      </div>
    </>
  );
};
export default CurrentWeather;
