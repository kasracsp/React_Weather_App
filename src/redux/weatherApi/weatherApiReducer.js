const initialState={
  loading:false,
  weather:{},
  error:''
}
const weatherApiReducer=(state=initialState,action)=>{
  switch (action.type) {
    case "FETCH_WEATHER_API_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_WEATHER_API_SUCCESS":
      return {
        loading: false,
        weather: action.payload,
      };
    case "FETCH_WEATHER_API_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default weatherApiReducer