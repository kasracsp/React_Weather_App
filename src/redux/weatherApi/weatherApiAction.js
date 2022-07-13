import axios from "axios";

const fetchWeatherApiRequest=()=>{
  return {
    type:'FETCH_WEATHER_API_REQUEST'
  }
}
const fetchWeatherApiSuccess=weather=>{
  return {
    type: "FETCH_WEATHER_API_SUCCESS",
    payload:weather,
  };
}
const fetchWeatherApiFailure=error=>{
  return {
    type: "FETCH_WEATHER_API_FAILURE",
    payload:error,
  };
}
const fetchWeatherApi=(city)=>{
  return (dispatch)=>{
    dispatch(fetchWeatherApiRequest())
    axios
      .get(
        "http://api.weatherapi.com/v1/forecast.json?key=" +
          process.env.REACT_APP_WEATHERAPI_IP_KEY +
          "&q=" +
          city +
          "&days=3"
      )
      .then((response) => dispatch(fetchWeatherApiSuccess(response.data)))
      .catch((error) => dispatch(fetchWeatherApiFailure(error.message)));
  }
}

export default fetchWeatherApi;