import React,{useState} from 'react'
import Card from './Card';

const NextTwoDays = ({weather,isFah}) => {
  const [showWeekly, setShowWeekly] = useState(false);
  return (
    <div className={`weekly_weather ${showWeekly ? "open" : ""}`}>
      <button
        className={`up_down ${showWeekly ? "turn" : ""}`}
        onClick={() => setShowWeekly(!showWeekly)}
      >
        <span className="material-icons">arrow_upward</span>
      </button>
      <h2 className="week_text">Next 2 days</h2>
      <div className="next_week_weathers">
        <Card weather={weather.forecast.forecastday[1]} isFah={isFah} />
        <Card weather={weather.forecast.forecastday[2]} isFah={isFah} />
      </div>
    </div>
  );
}

export default NextTwoDays