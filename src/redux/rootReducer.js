import { combineReducers } from "redux";
import weatherApiReducer from "./weatherApi/weatherApiReducer";
import geolocationReducer from "./geolocation/geolocationReducer";
import citiesReducer from "./cities/citiesReducer";

const rootReducer = combineReducers({
  weatherApiState: weatherApiReducer,
  geolocationState: geolocationReducer,
  citiesState: citiesReducer,
});

export default rootReducer