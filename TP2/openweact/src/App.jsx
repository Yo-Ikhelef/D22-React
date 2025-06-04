import getLocation from "./utils/getLocation.js";
import './App.css'
import {useEffect} from "react";
import {useState} from "react";
import fetchWeather from "./api/fetchWeather.js";
import MainWeather from "./components/MainWeather.jsx";
import WeatherList from "./components/WeatherList.jsx";
import Loader from "./components/ui/Loader.jsx";
import fetchWeatherByCity from "./api/fetchWeatherByCity.js";
import CitySelector from "./components/CitySelector.jsx";

function App() {
    const [loading, setLoading] = useState(true);
    const [cities, setCities] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const addCity = async (cityName) => {
            const data = await fetchWeatherByCity(cityName);
            setCities((prev) => [...prev, { name: cityName, data }]);
            setSelectedIndex(cities.length );

    }

    useEffect(() => {
        async function fetchLocation() {
            try {
                const { lat, lon } = await getLocation();
                const localData = await fetchWeather(lat, lon);
                setCities([{ name: localData.city.name, data: localData }]);
                setLoading(false);
            } catch (error) {
                console.error('Erreur localisation :', error);
                setLoading(false);
            }
        }
        fetchLocation();
    }, []);

    return (
        <div>
            <h1>La météo près de chez vous</h1>

            <CitySelector onAddCity={addCity}/>

            {loading ? (
                <Loader/>
            ) : (
                <>
                    {cities.length > 0 && (
                    <div className="tab-bar">
                        {cities.map((city, index) => (
                            <button
                                key={index}
                                className={selectedIndex === index ? 'active' : ''}
                                onClick={() => setSelectedIndex(index)}
                            >
                                {city.name}
                            </button>
                        ))}
                    </div>
                    )}
                    {cities[selectedIndex] && (
                        <>
                            <div className="card">
                                <MainWeather weatherData={cities[selectedIndex].data}/>
                            </div>
                            <WeatherList weatherList={cities[selectedIndex].data.list}/>
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default App
