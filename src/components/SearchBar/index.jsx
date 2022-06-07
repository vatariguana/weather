import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataWeatherName } from "../../redux/Actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { nameSearch } = useSelector(({ WeatherReducer }) => WeatherReducer);
  const [nameCity, setNameCity] = useState("");
  useEffect(() => {}, []);
  const onChangeInput = (evento) => {
    const value = evento.target.value;
    setNameCity(value);
  };
  const onClickSubmit = (e) => {
    e.preventDefault();
    dispatch(getDataWeatherName(nameCity));
  };
  console.log(nameSearch, "verqtraela data");
  return (
    <></>
    // <div>
    //   <input onChange={onChangeInput} placeholder="ciudad"></input>
    //   <button onClick={onClickSubmit} type="submit">
    //     buscarciudad
    //   </button>
    //   {nameSearch ? (
    //     <>
    //       <label>{nameSearch.name}</label>
    //       <label>{nameSearch.sys.country}</label>

    //       <div>
    //         <p>tem{Math.round(nameSearch.main.temp)}</p>
    //         <p>max{Math.round(nameSearch.main.temp_max)}</p>
    //         <p>min{Math.round(nameSearch.main.temp_min)}</p>
    //         <img
    //           className="icono-imagen"
    //           src={
    //             "http://openweathermap.org/img/wn/" +
    //             nameSearch.weather[0].icon +
    //             "@2x.png"
    //           }
    //           alt="icon"
    //         ></img>
    //       </div>
    //     </>
    //   ) : (
    //     alert("ciudad no encontrada")
    //   )}
    // </div>
  );
};
export default SearchBar;
