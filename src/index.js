import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "mobx-react";
import Store from "store/Store";
import StoreUser from "store/StoreUser";

const words = {
  store: new Store(),
};
const user = {
  user: new StoreUser(),
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider {...user}>
      <Provider {...words}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
