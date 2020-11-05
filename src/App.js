import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather App</h2>
      </header>
      <main>
        <Weather />
      </main>
    </div>
  );
}

export default App;
