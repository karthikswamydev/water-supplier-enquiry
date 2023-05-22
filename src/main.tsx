import * as React from "react";
// import ReactDOM from 'react-dom/client'
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import "./index.css";

const root = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);
