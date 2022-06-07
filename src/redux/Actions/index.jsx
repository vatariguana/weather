import axios from "axios";
const apiKey = "e4403dd0fa504890ed1c25d7021ea08c";
const lat = "-2.8833";
const lon = "-78.9833";

export const getDataWeather = () => async (dispatch) => {
  dispatch({
    type: "GET_LOADING_WEATHER",
  });
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
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
      `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}`
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
