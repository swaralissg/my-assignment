import { useState } from "react"
import './WeatherComponent.css'
import weather1 from '../assets/weather1.gif'


const api = {
    key: "9a72b5f3fda7f08624258823199d5da0",
    base: "https://api.openweathermap.org/data/2.5/"

}

function WeatherComponent() {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    /*
      Search button is pressed. Make a fetch call to the Open Weather Map API.
    */
    const searchPressed = () => {

        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            });
    };
    return (
        <div className="hello">
            <header className="hi">
                {/* HEADER  */}
                <div id="weather-card" className="card">
                    <p className="weather-title">Weather App<img style={{height: '36px', width: '72px'}} alt="cloud-icon" src={weather1}/></p>
                    {/* Search Box - Input + Button  */}
                    <div className="search-box">
                        <input
                            className="weather-placeholder"
                            type="text"
                            placeholder="Search your city"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="search-button" onClick={searchPressed}>Search</button>
                    </div>
                    {/* If weather is not undefined display results from API */}
                    {typeof weather.main !== "undefined" ? (
                        <div id="weather-output" style={{
                            'border-radius': '10px', 'margin-top': '19px', 'background-image':
                                'linear-gradient(to bottom right, #6E45E1, #89D4CF', 'border': '1px solid #bbc4eb'
                        }} className="card">
                            {/* Location  */}
                            <p className="margin" style={{ 'margin-top': '5px' }}><span className="weather-text">City Name :</span> {weather.name}</p>
                            {/* Temperature Celsius  */}
                            <p className="margin"><span className="weather-text">Temperature :</span>  {weather.main.temp}°C</p>
                            {/* Condition (Sunny ) */}
                            <br/>
                            <p className="margin"> <span className="weather-text">Condition :</span> {weather.weather[0].main}</p>
                            <p className="margin"> <span className="weather-text">Description :</span> ({weather.weather[0].description})</p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </header>
        </div>
    );
}

export default WeatherComponent