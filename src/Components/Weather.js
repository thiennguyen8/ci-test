import React from 'react';
import { useState } from "react";

const API = "https://api.openweathermap.org/data/2.5/weather";
const APIKEY = "26e92efaa9e223f1e1a8b74f9093d777";

const icons = {
    typClear: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    Rain: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    Snow: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    Clouds: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    Haze: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    Smoke: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    Mist: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    Drizzle: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
};

export default function Weather() {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchData = () => {
    return fetch(`${API}?q=${location}&units=metric&appid=${APIKEY}`).then(
        (res) => {
        return res.json();
        }
    );
    };

    const getWeatherInfo = () => {
    setWeather(null);

    fetchData()
        .then((data) => {
            setWeather(data);
        })
    };

    return (
    <div className='screen'>
        <div>
        <input
            type="text"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter your location"
        />
        <button onClick={getWeatherInfo}>Find</button>
        </div>

        {weather && (
        <div>
            <div>
            {weather.name}, {weather.sys.country}
            </div>
            <img
            style={{ maxWidth: "100px" }}
            src={icons[weather.weather[0].main]}
            alt=""
            />
            <div>{weather.weather[0].main}</div>
        </div>
        )}
    </div>
    );
}
