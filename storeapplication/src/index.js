import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import CounterReducer from "./reducers/CounterReducer.js";
import AddItemToCartReducer from "./reducers/AddItemToCartReducer.js";
import { Provider } from "react-redux";
/*
 * Store - Hanterar state
 * Reducers - Uppdaterar state
 * Action - Bestämmer vad som ska uppdateras och med vilket data
 */

// Store - Innehåller vårt state och vår reducer
const store = createStore(
  CounterReducer,
  window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
);

// const store = createStore(
//   AddItemToCartReducer,
//   window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/** <Provider store={store}> Gör store tillgänglig för hela React-appen**/}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
