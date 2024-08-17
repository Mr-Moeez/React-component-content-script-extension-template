import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/tailwind.css";

const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
