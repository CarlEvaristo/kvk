import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { CompanyContextProvider } from "./Context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CompanyContextProvider>
    <Router>
        <App/>
    </Router>
  </CompanyContextProvider>
);
