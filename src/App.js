import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchGeolocation from './redux/geolocation/geolocationAction'
import fetchCities from "./redux/cities/citiesAction";
import LandingPage from "./components/LandingPage";
import SearchPage from "./components/SearchPage";
import LoadingPage from "./components/LoadingPage";

function App() {
  const dispatch = useDispatch();
  const weatherApiState = useSelector((state) => state.weatherApiState);
  const geolocationState = useSelector((state) => state.geolocationState);

  useEffect(() => {
    dispatch(fetchGeolocation());
    dispatch(fetchCities());
  }, []);

  return (
    <>
      {geolocationState.loading || weatherApiState.loading ? (
        <LoadingPage />
      ) : weatherApiState.error ? (
        <h1>{weatherApiState.error}</h1>
      ) : (
        <div>
          <LandingPage />
          <SearchPage />
        </div>
      )}
    </>
  );
}

export default App;
