import React from 'react';
import App from './App';
import './Main.css';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


// ReactDOM.render(<App/>,document.getElementById('root'))



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
