import './WeatherList.css';

export default function WeatherList({weatherList}) {
    return (
        <div className={"weather-list"}>
            {weatherList.map((weather, index) => {
                const date = new Date(weather.dt_txt);
                const day = date.toLocaleDateString('fr-FR', { weekday: 'short' });
                const hour = date.getHours()
                return (
                    <div key={index} className={"weather-item"}>
                        <p>{day}</p>
                        <p>{hour}h</p>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                             alt="weathericon"/>
                        <p>{Math.round(weather.main.temp)}°C</p>
                    </div>
                )
            })}

        </div>
    )
}