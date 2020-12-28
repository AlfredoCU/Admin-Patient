import React from "react";
import ReactDOM from "react-dom";
import { App } from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/normalize.css";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
