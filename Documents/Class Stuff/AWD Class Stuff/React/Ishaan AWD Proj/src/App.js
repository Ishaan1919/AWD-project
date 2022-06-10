import logo from './logo.svg';
import './App.css';
import person from './Person';
import Person1 from './Person1';
import Application2 from './Application';
import player from './Player';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wasup.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Appp(){
    const [count, setcount] = useState(1);
    const [color, setcolor] = useState("green");
    const changeCount = () => {
    setcount (count + 1) ;
    };
    return (
        
    <div className="App">
        
    <header className="App-header">
    <h2>Count: {count}</h2>
        <img src={logo} className="App-logo" alt="logo" />
    
    <button onClick={changeCount}>Click me</button>
    
    <button class = "but" id = "bl" onClick={() => setcolor ("Blue")}>Blue</button>
    <button class = "but"  id = "bl" onClick={() => setcolor ("Red")}>Red</button>

    
    <button class = "but" id = "bl" onClick={() => setcolor ("Orange")}>Orange</button>

    <h2>favorite color is {color}</h2>
    </header>
    </div>
    );
    }

export default Appp;