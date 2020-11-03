import React from "react";
import SearchEngine from "./SearchEngine";

export default function Weather() {
       
    return (
        <div className="Container">
          <div className="SearchEngine">
            <h2>Hello React Weather App</h2>
            <SearchEngine />
          </div>
          <a href="https://github.com/ajdaflajs/weather-react-app">GitHub</a>
        </div>

    );
    
}