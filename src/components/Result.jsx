const Result = ({ result }) => {
    const { name, main } = result;
    const KELVIN = 273;
    console.log(main);

    return (
        <div className="container weather">
            <h2>{name}</h2>
            <p>{parseInt(main.temp - KELVIN)} <span>&#x2103;</span> </p>
            <div className="temps">
                <p>Min temperature: {parseInt(main.temp_min - KELVIN)} <span>&#x2103;</span> </p>
                <p>Max temperature: {parseInt(main.temp_max - KELVIN)} <span>&#x2103;</span> </p>
            </div>
            
        </div>
        
    )
}

export default Result;