import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Footer from './Footer';
//import Header from './Header';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import AboutMe from './AboutMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
