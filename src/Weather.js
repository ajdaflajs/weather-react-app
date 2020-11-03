import React from "react";
import axios from "axios";

export default function Weather() {
    
    function handleResponse(response){
        alert (`Weather in London is ${response.data.main.temp}`)
    }

    let apiKey = "91dd9571694065e99a37dfcdc3f1bcb5"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);
    return <div>Hello World 002</div>;
    
}