const initialState = {
  isLoading: false,
  errors: null,
  getWeatherAll: null,
  nameSearch: "",
};

function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LOADING_WEATHER":
      return {
        ...state,
        isLoading: true,
        errors: null,
        getWeatherAll: null,
      };
    case "GET_WEATHER_DATA":

      return {
        ...state,
        isLoading: false,
        errors: null,
        getWeatherAll: action.payload,
      };
      case "GET_WEATHER_DATA_NAME":

        return {
          ...state,
          isLoading: false,
          errors: null,
          nameSearch: action.payload,
        };
    case "GET_ERRORS_WEATHER":
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
        getWeatherAll: null,
      };
    default:
      return state;
  }
}

export default WeatherReducer;
