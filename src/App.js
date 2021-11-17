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
          Welcome.
            The textbox below extracts the numbers contained on each line of an input text,
            and returns a comma separated list of the numbers.

            Enter this text:
            "01010101randomText
            randomText0000000
            11111111111moreRandomText"

            And you will receive, free of charge, this text:
            "01010101, 0000000, 11111111111"
        </p>
         <Parse/>
      </header>
    </div>
  );
}

export default App;
