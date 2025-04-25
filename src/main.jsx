import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*
 * Entry point for the React application with Vite
 * Performance Note: Avoid adding heavy logic here to minimize main-thread work
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
