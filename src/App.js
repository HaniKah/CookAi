import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import CookAi from "./components/CookAi";
import Creators from "./components/Creators";
import Contact from "./components/Contact";
import Recipe from "./components/Recipe";
import TypeWriterAi from "./components/TypeWriterAi";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavLink to="/">
          <span>CookAi</span>
        </NavLink>
        <NavLink to="/creators">
          <span>Creators</span>
        </NavLink>
        <NavLink to="/contact">
          <span>Contact</span>
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<CookAi />} />
        <Route path="/creators" element={<Recipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
