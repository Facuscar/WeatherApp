import Form from "./Form";
import Result from "./Result";
import useWeather from "../hooks/useWeather";

const WeatherApp = () => {

    const { result } = useWeather();    
    
    return (
        <main className="two-columns">
            <Form />
            {
                result?.name && <Result result={result} />
            }
            
        </main>
    );
}

export default WeatherApp;