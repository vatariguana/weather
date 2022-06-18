import axios from "axios";


export const getDataWeather = () => async (dispatch) => {
  

  dispatch({
    type: "GET_LOADING_WEATHER",
  });
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.REACT_APP_LAT}&lon=${process.env.REACT_APP_LON}&appid=${process.env.REACT_APP_API_KEY}`
    );
    dispatch({
      type: "GET_WEATHER_DATA",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ERRORS_WEATHER",
      payload: {
        title: "ERROR",
        message: "ALGO FALLO",
      },
    });
  }
};
export const getDataWeatherName = (nameCity) => async (dispatch) => {
  dispatch({
    type: "GET_LOADING_WEATHER_NAME",
  });
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${process.env.REACT_APP_API_KEY}`
    );
    console.log(response, "dataname");
    dispatch({
      type: "GET_WEATHER_DATA_NAME",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ERRORS_WEATHER_NAME",
      payload: {
        title: "ERROR",
        message: "ALGO FALLO",
      },
    });
  }
};
