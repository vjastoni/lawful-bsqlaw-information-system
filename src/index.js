import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import "./styles/style.css";

const root =
  ReactDOM.createRoot(
    document.getElementById(
      "root"
    )
  );
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
