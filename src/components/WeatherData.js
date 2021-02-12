import React from 'react';
import DateTime from './DateTime';
import '../styles/WeatherData.css';
import {motion} from 'framer-motion';

const WeatherData = ({ cityWeatherInfo }) => {
  
  return (
    <motion.div animate={{opacity: 1, transition:{duration: 1.5} }} 
    initial={{opacity:0}} 
    className="weather-data">
      <DateTime />
      <div className="city-name">
        <h1>{cityWeatherInfo.name}, {cityWeatherInfo.sys.country}</h1>
        <h1 className="description">{cityWeatherInfo.weather[0].description}</h1>
      </div>
      <div className="weather-specs">
        <div className="weather-spec">
          <p className="weather-title">Temperature</p>
          <p className="weather-value">{cityWeatherInfo.main.temp} °C</p>
          <p className="weather-value-sm">(feels like {cityWeatherInfo.main.feels_like} °C)</p>
        </div>
        <div className="weather-spec wind">
          <p className="weather-title">Wind Speed</p>
          <p className="weather-value">{cityWeatherInfo.wind.speed} m/s</p>
        </div>
        <div className="weather-spec">
          <p className="weather-title">Humidity</p>
          <p className="weather-value">{cityWeatherInfo.main.humidity} %</p>
        </div>
      </div>
    </motion.div>
    
  );
};

export default WeatherData;