import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Reactdom is a method used to render a react element into the DOM
// The first argument is the component rendered, and the second is the container element within the page
// StrictMode is a tool for highlighting potential problems in an application
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);