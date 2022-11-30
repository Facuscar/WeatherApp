import { useState, createContext } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const [search, setSearch] = useState({
        city: '',
        country: '',
    });

    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const searchData = (e) => {
        setSearch((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value,
            }
        ))
    }

    const getWeather = async (input) => {
        try {
          const { city, country } = input;  

          const appId = import.meta.env.VITE_API_KEY;

          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`

          setLoading(true);

          const { data } = await axios(url);
          
          const { lat, lon } = data.coord;

          const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

          const { data: weatherData } = await axios(weatherUrl);

          setResult(weatherData);
          setNotFound(false);

        } catch (error) {
            console.log(error);
            setNotFound(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <WeatherContext.Provider value={{ search, searchData, getWeather, result, loading, notFound }}>
            {children}
        </WeatherContext.Provider>
    );
}

export default WeatherContext;