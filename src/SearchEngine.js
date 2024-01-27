import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState(false);
  let [weather, setWeather] = useState({});
  let apiKey = "a8ef3f3t189785b5cbocc4f20b7a40e0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  function displayWeather(response) {
    setResult(true);
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(displayWeather);
    return form;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        id="search"
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input id="button" type="submit" value="search" />
    </form>
  );

  if (result) {
    return (
      <div>
        {form}
        <div className="city-name">
          <h1>{city}</h1>
        </div>
        <div className="row">
          <div className="day">Saturday</div>
          <div className="time">21:00</div>
        </div>
        <div className="row">
          <div className="col current-weather">
            <img src={weather.icon} alt={weather.description} />
          </div>
          <div className="col current-temperature">
            <strong>{Math.round(weather.temperature)}</strong>
          </div>
          <div className="units">°C</div>
        </div>
        <div className="row">
          <div className="humidity">
            Humidity: <strong>{weather.humidity}%</strong>
          </div>
          <div className="wind">
            Wind: <strong>{weather.wind}km/hr</strong>
          </div>
        </div>
        <div className="row">
          <div className="description">{weather.description}</div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
