
export default function fetchWeather(lat, lon) {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    console.log("API Key:", apiKey);
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather data:", data);
            return data;
        })
        .catch(error =>{
            console.error("Error fetching weather data:", error);
            throw error;
        })
}