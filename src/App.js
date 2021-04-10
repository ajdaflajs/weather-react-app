import React from "react";
import Weather from "./Weather";
import Author from "./Author";
import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer className="App-footer">
        <Author />
      </footer>
    </div>
  );
}

export default App;
