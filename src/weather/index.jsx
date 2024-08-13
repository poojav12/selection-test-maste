

import React, { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { ReactComponent as Moon } from '../svgs/MoonSvg.svg';
import { ReactComponent as Cloud } from '../svgs/Cloud.svg';

const WeatherWidget = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.length) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=999da0a60829e8385401f34438a13a3f&units=metric`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          setError("Could not fetch weather data");
          console.error("error:", error);
        });
    }
  }, [location]);

  if (error) return <div>{error}</div>;
  if (!weatherData) return <div>Loading...</div>;

  const currentTimeUTC = new Date().getTime() / 1000;
  const localTime = currentTimeUTC + weatherData.timezone;
  const isDayTime = localTime > weatherData.sys.sunrise && localTime < weatherData.sys.sunset;
  const cloudSize = weatherData.clouds.all;

  return (
    <div className="weather">
      {isDayTime ? <div className='sun'></div> : <Moon className="moon" />}
      <div className='cloudcont'>
        {cloudSize > 50 && <Cloud className="cloud" />}
      </div>
      <div className='temp'>{Math.round(weatherData.main.temp)}°</div>
      <div className='weath'>{weatherData.weather[0].main}</div>
      <div className='low-high'>{Math.round(weatherData.main.temp_min)}°/{Math.round(weatherData.main.temp_max)}°</div>
      <div className='feels-like'>Feels like: {Math.round(weatherData.main.feels_like)}°</div>
      <div className='location'>{weatherData.name}</div>
      <div className='humidity'>Humidity: {weatherData.main.humidity}%</div>
    </div>
  );
};

export default WeatherWidget;

