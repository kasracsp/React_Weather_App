const initialState = {
  loading: false,
  cities: [],
  error: false,
};
const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CITIES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_CITIES_SUCCESS":
      const allCities = action.payload.flatMap((item) => item.cities);
      return {
        ...state,
        loading: false,
        cities: allCities,
        error: false,
      };
    case "FETCH_CITIES_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default citiesReducer;
