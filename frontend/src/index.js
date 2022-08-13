import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </head>
    <App />
  </React.StrictMode>
);
