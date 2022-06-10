import { Component, useState } from "react";
import Application2 from "./Application";

var userValueA = 0;
var userValueB = 0;



function AppCnn(){
    const getInputValueA = (event) => {
        // show the user input value to console
        userValueA = event.target.value;
      
        console.log(userValueA);
      };
      
      const getInputValueB = (event) => {
        // show the user input value to console
        userValueB = event.target.value;
      
        console.log(userValueB);
      };
        const [num, setNum] = useState("");
            return(
          <div className="App">
            <h1>Hello CodeSandbox</h1>
            <input id="num 1" onChange={getInputValueA}></input>
            <input id="num 2" onChange={getInputValueB}></input>
            <button type="button" on>Add</button>
            <p>Start editing to see some magic happen!</p>
          </div>)

    };
      
export default AppCnn();