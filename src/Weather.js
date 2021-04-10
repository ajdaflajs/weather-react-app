import React from "react";
import SearchEngine from "./SearchEngine";
import MainForecast from "./MainForecast"
import WeeklyForecast from "./WeeklyForecast";
import "./weather.css";

export default function Weather() {
       
    return (
        <div className="Weather">
            <MainForecast />
            <SearchEngine />
            <WeeklyForecast />
        </div>

    );
    
}

// results from the searchEngine displays the weather forecast in the SearchEngine box and should be displayed in the MainForecast box in reality!!!
// fix that the forecast for a city is displayed correctly in the MainForecast box and not SearchEngine!!!
// or change SearchEngine into MainForecast and delite the one you do not need