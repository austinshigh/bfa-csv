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
            {/*<h4>*/}
            {/*The textbox below accepts alphanumeric characters,<br></br> parses out the numbers on each line,<br></br> and generates a comma separated list.*/}
            {/*</h4>*/}
            <div id="description">
            <h5>
                <p>Enter this text:<br></br>"01010101randomText<br></br>randomText0000000<br></br>1111111111moreRandomText"</p>
            </h5>

            <h5>
                And receive, free of charge, this text:
                <p>"01010101, 0000000, 11111111111"</p>
            </h5>
            </div>
        </p>
         <Parse/>
      </header>
    </div>
  );
}

export default App;
