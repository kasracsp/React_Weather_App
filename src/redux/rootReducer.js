import { combineReducers } from "redux";
import weatherApiReducer from "./weatherApi/weatherApiReducer";
import geolocationReducer from "./geolocation/geolocationReducer";

const rootReducer = combineReducers({
  weatherApiState: weatherApiReducer,
  geolocationState: geolocationReducer,
});

export default rootReducer