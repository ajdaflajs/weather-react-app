import React from "react";
import SearchEngine from "./SearchEngine";

export default function Weather() {
       
    return (
        <div className="Container">
          <div className="SearchEngine">
            <h2>React Weather App</h2>
            <SearchEngine />
          </div>
          <br />
          <p>Created by <span>Ajda Flajs</span>
            <br/>
            <a href="https://github.com/ajdaflajs/weather-react-app">GitHub</a>
          </p>
          
        </div>

    );
    
}