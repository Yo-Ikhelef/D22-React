import fetchWeather from "./fetchWeather.js";

export default function fetchWeatherByCity(cityName) {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const geoCoderUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`
    return fetch(geoCoderUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                throw new Error("City not found");
            }
            const { lat, lon } = data[0];
            return fetchWeather(lat, lon);
        })
        .catch(error => {
            throw error;
        });

}