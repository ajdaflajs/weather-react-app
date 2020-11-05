import React from "react";
import SearchEngine from "./SearchEngine";
import MainForecast from "./MainForecast"
import WeeklyForecast from "./WeeklyForecast";

export default function Weather() {
       
    return (
        <div className="Weather">
            <SearchEngine />
            <MainForecast />
            <WeeklyForecast />
        </div>

    );
    
}