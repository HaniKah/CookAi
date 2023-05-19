import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import CookAi from "./components/CookAi";
import Creators from "./components/Creators";
import Contact from "./components/Contact";
import Recipe from "./components/Recipe";
import TypeWriterAi from "./components/TypeWriterAi";
import Creator from "./components/Creator";
import MealPlaner from "./components/MealPlaner";
import DarkMod from "./components/DarkMode";

function App() {
  return (
    <div className="cookai_app">
      <div className="navbar">
        <NavLink to="/">
          <span>CookAi</span>
        </NavLink>
        <NavLink to="/mealPlaner">
          <span>MealPlaner</span>
        </NavLink>
        <NavLink to="/creators">
          <span>Creators</span>
        </NavLink>
        <NavLink to="/contact">
          <span>Contact</span>
        </NavLink>
        <DarkMod />
      </div>

      <Routes>
        <Route path="/" element={<CookAi />} />
        <Route path="/mealPlaner" element={<MealPlaner />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<Recipe />} />
        <Route path="/creators/:id" element={<Creator />} />
      </Routes>
    </div>
  );
}

export default App;
