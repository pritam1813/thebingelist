import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import App from "./components/App.jsx";
import "./assets/css/index.css";
import rootReducer from "./reducers";

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

//Above function can be written this way too
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //middleware code
    console.log("ACTION_TYPE = ", action.type);
    next(action);
  };

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
