// App.js or index.js
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleTranslateScript from './GoogleTranslateScript';
import App from './App'; // Import your main app component

ReactDOM.render(
  <React.StrictMode>
    <GoogleTranslateScript />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
