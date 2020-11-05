import React from "react";
import "./author.css";

export default function Author() {
    return (
      <div className="Author">
        <div>Created by 
            <a href="https://www.linkedin.com/in/ajdaflajs/" target="_blank">
              <span className="Link"> Ajda Flajs</span>
            </a>
        <br/>
        <a href="https://github.com/ajdaflajs/weather-react-app" target="_blank">
            <span className="Link">GitHub</span>
        </a>
        </div>
      </div>
    );
}

