import React from 'react';
import ReactDOM from 'react-dom/client'; // In version 18 of react we need to add ---/client
import App from './App';

import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);