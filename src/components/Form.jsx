const Form = () => {
    return (
        <div className="container">
            <form action="">
                <div className="field">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" />
                </div>
                <div className="field">
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country">
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