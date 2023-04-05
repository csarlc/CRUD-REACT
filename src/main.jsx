import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./AppRouter";
import "./index.css";
import { isUserAuthenticated } from "./login/Helpers/LoginHelper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className={isUserAuthenticated() ? "main-content" : null}>
      <AppRouter></AppRouter>
    </div>
  </BrowserRouter>
);
