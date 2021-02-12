import React from 'react';
import '../styles/WeatherSearch.css';

const WeatherSearch = ({ api_call }) => {
  return (
    <div className="weather-search">
      <form onSubmit={api_call}>
        <input name="city" placeholder="Enter name of a city" type="text"/>
        <button>Get Weather</button>
      </form>
    </div>
  );
};

export default WeatherSearch;