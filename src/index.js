import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DataContext from "./context/DataContext";
import FilterContext from "./context/FilterContext";
import { BrowserRouter } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext>
    <FilterContext>
      <DataContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </DataContext>
    </FilterContext>
  </ThemeContext>
);
