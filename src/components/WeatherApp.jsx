import Form from "./Form";
import Result from "./Result";
import Spinner from "./Spinner";
import useWeather from "../hooks/useWeather";

const WeatherApp = () => {

    const { result, loading, notFound } = useWeather();    
    
    return (
        <main className="two-columns">
            <Form />
            {
                loading ?  <Spinner /> : notFound ? <p>No results were found.</p> : (result?.name && <Result result={result} /> )
            }
            
        </main>
    );
}

export default WeatherApp;