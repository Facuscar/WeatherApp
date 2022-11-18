import { useState } from "react";
import useWeather from "../hooks/useWeather";

const Form = () => {
    const [warning, setWarning] = useState('');
    const { search, searchData, getWeather } = useWeather();

    const  { city, country } = search;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(search).includes('')) {
            setWarning('All the fields are required');
            setTimeout(() => {
                setWarning('');
            }, 5000);
            return;
        }
        getWeather(search);
    }

    

    return (
        <div className="container">
            { warning && <h4 className="warning">{warning}</h4>}
            <form action="" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" onChange={searchData} value={city}/>
                </div>
                <div className="field">
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country" onChange={searchData} value={country}>
                        <option value="">--Select a country--</option>
                        <option value="US">United States of America</option>
                        <option value="AR">Argentina</option>
                        <option value="CL">Chile</option>
                        <option value="FR">France</option>
                        <option value="IT">Italy</option>
                        <option value="ES">Spain</option>
                    </select>
                </div>
                <input type="submit" value="Get weather" />
            </form>
        </div>
    );
}

export default Form;