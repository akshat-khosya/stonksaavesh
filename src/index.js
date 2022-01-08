import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './Context/Context';
import { BrowserRouter as Router } from "react-router-dom";
import './style.css';
ReactDOM.render(
    <ContextProvider>
    <Router>
       <App />
    </Router>
    </ContextProvider>,
  document.getElementById('root')
);