 import React, { useState } from 'react';
 import axios from 'axios';
//components
import Header from './components/Header';
import WeatherSearch from './components/WeatherSearch';
import WeatherData from './components/WeatherData';
import Error from './components/Error';

const App = () => {
  const [cityWeatherInfo, setCityWeatherInfo] = useState();
  const [error, setError] = useState();

  const api_call = async e => {
    e.preventDefault();
    const cityName = e.target.elements.city.value;
    if (!cityName) return setError("Please type in name of a city"), setCityWeatherInfo(null); 
    const API_KEY = process.env.REACT_APP_WEATHER_API;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    const request = axios.get(URL);
    const response = await request;
    setCityWeatherInfo(response.data);
    setError(null);
  }  

  return (
    <div>
      <Header />
      <WeatherSearch api_call={api_call} />
      { cityWeatherInfo && <WeatherData cityWeatherInfo={cityWeatherInfo} /> }
      { error && <Error error={error} /> }
    </div>
  );
}

export default App;
