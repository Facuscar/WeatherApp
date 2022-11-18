import { useState, createContext } from 'react';

const WeatherContext = createContext();

const [search, setSearch] = useState();

const searchData = (e) => {
    setSearch((prev) => (
        {
            ...prev,
            [e.target.name]: e.target.value,
        }
    ))
}

export const WeatherProvider = ({ children }) => {
    return (
        <WeatherContext.Provider value={{ search, searchData }}>
            {children}
        </WeatherContext.Provider>
    );
}

export default WeatherContext;