import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { timeTransfrom } from "../helper/functions";
import styled from "styled-components";
import NextTwoDays from "./NextTwoDays";

const CompassSpan = styled.span`
  transform: translate(-50%) rotate(calc(${(props) => props.windDegree} * 1deg));
`;

const LandingPage = () => {
  const weatherApiState = useSelector((state) => state.weatherApiState);
  const [date, setDate] = useState({});
  const [isFah, setIsFah] = useState(false);

  useEffect(() => {
    if (Object.keys(weatherApiState.weather).length > 0) {
      setDate(timeTransfrom(weatherApiState.weather.location.localtime));
    }
  }, []);

  return (
    <>
      {Object.keys(weatherApiState.weather).length > 0 && (
        <div className="main_weather">
          <div className="weather_intro">
            <h2>
              latest weather at{" "}
              <span id="city">{weatherApiState.weather.location.name}</span>
            </h2>
          </div>

          <div className="weather_info">
            <div className="date">
              <div className="w_y">
                <h4 id="weekday">{date.weekday}</h4>
                <h2 id="year">{date.year}</h2>
              </div>
              <div className="m_d">
                <h4 id="month">{date.month}</h4>
                <h4 id="day">{date.day}</h4>
              </div>
            </div>

            <div className="weather_temp">
              <h2>Temperature</h2>
              <div className="h_l">
                <h3>
                  Current:{" "}
                  {isFah ? (
                    <span className="text_temp">
                      {weatherApiState.weather.current.temp_f}°F
                    </span>
                  ) : (
                    <span className="text_temp">
                      {weatherApiState.weather.current.temp_c}°C
                    </span>
                  )}
                </h3>
                <h3>
                  High:{" "}
                  {isFah ? (
                    <span className="text_temp" id="high_temp">
                      {
                        weatherApiState.weather.forecast.forecastday[0].day
                          .maxtemp_f
                      }
                      °F
                    </span>
                  ) : (
                    <span className="text_temp" id="high_temp">
                      {
                        weatherApiState.weather.forecast.forecastday[0].day
                          .maxtemp_c
                      }
                      °C
                    </span>
                  )}
                </h3>
                <h3>
                  Low:{" "}
                  {isFah ? (
                    <span className="text_temp" id="low_temp">
                      {
                        weatherApiState.weather.forecast.forecastday[0].day
                          .mintemp_f
                      }
                      °F
                    </span>
                  ) : (
                    <span className="text_temp" id="low_temp">
                      {
                        weatherApiState.weather.forecast.forecastday[0].day
                          .mintemp_c
                      }
                      °C
                    </span>
                  )}
                </h3>
              </div>
              <h3>
                Humidity:{" "}
                <span id="humidity" className="text_temp">
                  {weatherApiState.weather.current.humidity}
                </span>
              </h3>
            </div>

            <div className="wind">
              <div className="compass">
                <CompassSpan
                  id="compass_pointer"
                  windDegree={weatherApiState.weather.current.wind_degree}
                ></CompassSpan>
              </div>
              <div className="wind_speed">
                <h3>wind</h3>
                <h4>
                  <span id="speed">
                    {weatherApiState.weather.current.wind_kph}
                  </span>{" "}
                  kph
                </h4>
              </div>
            </div>
          </div>

          <div className="weather_type">
            <div className="show_weather_type">
              <h2 id="weather_type_text">
                {weatherApiState.weather.current.condition.text}
              </h2>
              <img
                src={weatherApiState.weather.current.condition.icon}
                id="weather_type_img"
                alt={weatherApiState.weather.current.condition.text}
              />
            </div>
            <div className="cel_or_fah" onClick={() => setIsFah(!isFah)}>
              <span className="cel">°C</span>
              <span id="change_type" className={isFah ? "fahren" : ""}></span>
              <span className="fah">°F</span>
            </div>
          </div>
        </div>
      )}
      {Object.keys(weatherApiState.weather).length > 0 && (
        <NextTwoDays weather={weatherApiState.weather} isFah={isFah}/>
      )}
    </>
  );
};

export default LandingPage;
