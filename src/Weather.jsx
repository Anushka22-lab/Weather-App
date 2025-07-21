import { useState, useEffect } from 'react';
import axios from 'axios';

// ✅ Your OpenWeather API Key
const API_KEY = 'e747272dc9f3414bef56b03b64478926';

function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // ✅ Fetch weather data when city changes
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // reset previous state
        setError(null);
        setWeather(null);

        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              q: city,
              appid: API_KEY,
              units: 'metric',
            },
          }
        );

        setWeather(response.data);
      } catch (err) {
        setError('City not found');
      }
    };

    fetchWeather();
  }, [city]);

  // ✅ Show error if city not found
  if (error) {
    return <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>;
  }

  // ✅ Show loading message while fetching
  if (!weather) {
    return <p style={{ fontWeight: 'bold' }}>Loading...</p>;
  }

  // ✅ Show weather details
  return (
    <div
      style={{
        marginTop: '20px',
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '300px',
        textAlign: 'center',
        color: 'black',
        textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
        backgroundColor: '#5DADE2'
      }}
    >
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <p>🌡️ Temp: {weather.main.temp}°C</p>
      <p>☁️ {weather.weather[0].description}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬️ Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
