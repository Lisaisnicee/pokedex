import React, { useState, useEffect } from 'react';

const API_KEY = 'fbe76165b33072657c0fcc28e2687d20';

const Fetch = ({ ville }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville},uk&APPID=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error('Error :', error);
        setData(null);
      });
  }, [ville]);

 
  console.log("hello");

  return (
    <div>
     
      {data && (
        <ul>
          <li>City: {data.name}</li>
        
        
        </ul>
      )}
    </div>
  );
};

export default Fetch;


