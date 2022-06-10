import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BMIApp from './bmi';
// import Appp from './App';
// import App from './App';
// import player from './Player';
// import Application2 from './Application';
// import person from './Person';
// import Person1 from './Person1';
// import reportWebVitals from './reportWebVitals';
// import AppCnn from './cnpracticeque'
import CssTesting from './csstesting';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BMIApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals