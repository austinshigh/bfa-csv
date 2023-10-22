import logo from './assets/n.png';
import './App.css';
import React from "react";
import Parse from "./Parse";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <h1>List Generator</h1>
        </p>
         <Parse/>
      </header>
    </div>
  );
}

export default App;
