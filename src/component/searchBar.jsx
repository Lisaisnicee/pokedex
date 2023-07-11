import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/css/weather.css';


function SearchBar() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = 'fbe76165b33072657c0fcc28e2687d20';

  const fetchData = async (ville) => {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ville}&APPID=${API_KEY}`;
      const response = await axios.get(url);
      setData({
        descp: response.data.weather[0].description,
        temp: response.data.main.temp,
        city: response.data.name,
        humidity: response.data.main.humidity,
        press: response.data.main.pressure,
        icon : response.data.weather[0].icon
      });
      setError(null); 
    } catch (error) {
      setError(error.message); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(''); 
  }, []);


  const C = data ? (data.temp - 273.15).toFixed(2) : null;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      
      <form
  onSubmit={(e) => {
    e.preventDefault();
    fetchData(e.target.elements.ville.value);
  }}
  className="search-container"
>
  <input
    type="text"
    placeholder="City"
    name="ville"
    id="search-bar"
  />
  <button type="submit" className="search-icon bttn">
    <img
      src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
      alt="Search Icon"
      style={{ width: '40px', height: '40px' }} 
    />
  </button>
</form>
    
          {error ? (
            <div>
                Error: {error}
                </div>
          ) : (
            data && (


                <div className="weather-card">
                <div className="weather-card--landmark">
                  <div className="landmark">
                     <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="meteo" />
                  </div>
                  <div className="weather-card--cityname">
                    <h1>{data && data.city}</h1>
                  </div>
                </div>
                <hr />
                <div className="weather-card--details">
                  <div className="welement">Météo: {data && data.descp}</div>
                  <div className="welement">Température: {C} &#8451;</div>
                  <div className="welement">Humidité: {data && data.humidity} %</div>
                  <div className="welement">Pression: {data && data.press} mb</div>
                </div>
              </div>























                
            )
          )}
     
  
    </>
  );
}

export default SearchBar;
