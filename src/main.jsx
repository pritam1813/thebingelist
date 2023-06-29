import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit';

import App from './components/App.jsx';
import './assets/css/index.css';
import rootReducer from './reducers';

const store = configureStore({reducer: rootReducer});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
)
