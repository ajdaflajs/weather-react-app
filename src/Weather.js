import React from "react";
import axios from "axios";

import SearchEngine from "./SearchEngine";

export default function Weather() {
    function handleResponse(response){
        alert (`Weather in London is ${Math.round(response.data.main.temp)}°C`)
    }

    let apiKey = "91dd9571694065e99a37dfcdc3f1bcb5"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);
    
    return (
        <div>
          <h2>Hello World 002</h2>
          <SearchEngine />
        </div>
    );
    
}