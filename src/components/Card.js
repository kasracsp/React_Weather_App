import React from 'react'
import { timeTransfrom } from "../helper/functions";

const Card = ({weather,isFah}) => {
  const date = timeTransfrom(weather.date);
  return (
    <div className="next_week_weather">
      <div className="next_date">
        <p className="next_month">{date.month}</p>
        <p className="next_day">{date.day}</p>
      </div>
      <div className="next_high_low">
        <p>
          High:{" "}
          {isFah ? (
            <span className="next_high">{weather.day.maxtemp_f}°F</span>
          ) : (
            <span className="next_high">{weather.day.maxtemp_c}°C</span>
          )}
        </p>
        <p>
          Low:{" "}
          {isFah ? (
            <span className="next_low">{weather.day.mintemp_f}°F</span>
          ) : (
            <span className="next_low">{weather.day.mintemp_c}°C</span>
          )}
        </p>
      </div>
      <div className="next_type">
        <h2 className="next_type_text">{weather.day.condition.text}</h2>
        <img
          src={weather.day.condition.icon}
          alt={weather.day.condition.text}
          className="next_type_img"
        />
      </div>
    </div>
  );
}

export default Card