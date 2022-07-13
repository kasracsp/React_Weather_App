import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchWeatherApi from "./redux/weatherApi/weatherApiAction";
import fetchGeolocation from './redux/geolocation/geolocationAction'
import LandingPage from "./components/LandingPage";

function App() {
  const dispatch = useDispatch();
  const weatherApiState = useSelector((state) => state.weatherApiState);
  const geolocationState = useSelector((state) => state.geolocationState);
  // console.log(geolocationState.location)

  useEffect(() => {
    dispatch(fetchGeolocation());
    // dispatch(fetchWeatherApi(geolocationState.location.city));
  }, []);

  return (
    <div className="App">
      {geolocationState.loading || weatherApiState.loading ? (
        <h1>loading...</h1>
      ) : weatherApiState.error ? (
        <h1>{weatherApiState.error}</h1>
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;
