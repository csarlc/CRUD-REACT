import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AppRouter } from "./components/AppRouter";
//import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  </React.StrictMode>
);
