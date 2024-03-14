import { ContextUserProvider } from "Providers/ContextUser/ContextUser";
import { ContextOfWordsProvider } from "Providers/ContextWords/ContextWords";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextUserProvider>
      <ContextOfWordsProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ContextOfWordsProvider>
    </ContextUserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
