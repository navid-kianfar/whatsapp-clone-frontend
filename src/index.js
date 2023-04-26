import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./official.css";
import "./index.css";
import { AppProvider } from "./context/appContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
