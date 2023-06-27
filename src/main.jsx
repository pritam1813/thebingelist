import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit';

import App from './components/App.jsx';
import './assets/css/index.css';
import movies from './reducers';

const store = configureStore({reducer: movies});
console.log('Store', store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
