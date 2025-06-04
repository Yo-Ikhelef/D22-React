import getLocation from "./utils/getLocation.js";
import './App.css'
import {useEffect} from "react";
import {useState} from "react";
import fetchWeather from "./api/fetchWeather.js";
import MainWeather from "./components/MainWeather.jsx";

function App() {
    const [coords, setCoords] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function fetchLocation() {

            try{
                const {lat, lon} = await getLocation();
                setCoords({lat, lon});
                fetchWeather(lat, lon).then(data =>{
                    setWeatherData(data);
                    console.log("Weather data:", data);
                })
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        }
        fetchLocation();


    }, []);

    return (
        <>
            <div>
                <h1>La météo près de chez vous :</h1>

                <div className="card">
                    {weatherData ? (
                        <MainWeather
                            weatherData={weatherData}
                        />


                    ) : (
                        <div>

                            <p>Chargement des données météo...</p>
                        </div>
                    )}
                </div>

            </div>

        </>
    )
}

export default App
