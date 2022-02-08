import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/App.css";
import "./components/Navigation.css";
import "./components/Preview.css";
import "./components/Comments.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
