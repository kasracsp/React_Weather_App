import axios from "axios";

const fetchCitiesRequest = () => {
  return {
    type: "FETCH_CITIES_REQUEST",
  };
};
const fetchCitiesSuccess = (location) => {
  return {
    type: "FETCH_CITIES_SUCCESS",
    payload: location,
  };
};
const fetchCitiesFailure = () => {
  return {
    type: "FETCH_CITIES_FAILURE",
  };
};

const fetchCities = () => {
  return (dispatch) => {
    dispatch(fetchCitiesRequest());
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((response) => {
        dispatch(fetchCitiesSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(fetchCitiesFailure(error.message));
      });
  };
};

export default fetchCities;
