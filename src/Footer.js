import React from "react";
// import axios from "axios";

export default function Footer() {

    // axios.get(apiURL).then(showWeeklyForecast);

    return(
        <div className="Footer">
            <div className="WeeksForecast">
                Weekly Weather Forecast
            </div>
            <div className="Author">
              <p>Created by <span href="#">Ajda Flajs</span>
              <br/>
              <a href="https://github.com/ajdaflajs/weather-react-app">GitHub</a>
              </p>
            </div>
        </div>
    )
}