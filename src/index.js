import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from './contextAPI/Authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </Router>
);