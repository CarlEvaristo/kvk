import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { CompanyContextProvider } from "./Context"
import 'font-awesome/css/font-awesome.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <CompanyContextProvider>
    <Router>
        <App/>
    </Router>
  </CompanyContextProvider>
)
