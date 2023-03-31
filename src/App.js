import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
// import Location from './Components/Location';
// import WeatherIcon from './Components/WeatherIcon';
// import Cloud from './Components/Cloud';
// import Temperature from './Components/Temperature';

import './App.css';

function App() {

  const [query, setQuery] = useState('');
  const [result, setResult] = useState({});

  const search = async (e) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=26e92efaa9e223f1e1a8b74f9093d777`
    );
    setResult(data);
    setQuery('');
  };

  return (
    <>
      <div className="weather-app">
        <div className="d-flex p-2">
          <input 
            className="form-control me-2" 
            type="text" 
            placeholder="ENTER YOUR LOCATION"  
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit" onClick={search}><i className="bi bi-search"></i></button>
        </div>
        {result && (
          <div className="">
            <div className="city">{result.name}</div>
            <div className="status">{result.weather[0].main}</div>
            <div className="description">{result.weather[0].description}</div>
            <div className="temperature">{result.main.temp}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

