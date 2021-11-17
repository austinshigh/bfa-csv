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
            <h1>Welcome.</h1>
            <div id="description">
            <h5>
                <p>You know what to do.</p>
            </h5>
            </div>
        </p>
         <Parse/>
      </header>
    </div>
  );
}

export default App;
