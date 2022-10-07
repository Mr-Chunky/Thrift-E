import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { CurrentUserContextProvider } from "./storage/current-user-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CurrentUserContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </CurrentUserContextProvider>
);
