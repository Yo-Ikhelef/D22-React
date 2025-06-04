
export default function MainWeather({weatherData}) {

    return (
        <div>

            <h2> Météo à {weatherData.city.name} </h2>
            <img src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`}
                 alt="weathericon"/>
            <p>Température actuelle : {Math.round(weatherData.list[0].main.temp)}°C</p>
            <p>{weatherData.list[0].weather[0].description}</p>
        </div>
    )
}