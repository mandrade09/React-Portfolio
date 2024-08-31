// the entry point for React to render the application.


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
