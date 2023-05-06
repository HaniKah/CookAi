import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataContext from "./context/DataContext";
import FilterContext from "./context/FilterContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataContext>
    <FilterContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterContext>
  </DataContext>
);
