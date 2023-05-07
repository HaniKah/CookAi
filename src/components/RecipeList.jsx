import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { NavLink } from "react-router-dom";
export default function RecipeList() {
  const { recipes } = useContext(DataContext);

  return (
    <div className="recipeList_container">
      {recipes?.map((recipe, i) => (
        <NavLink to={`/${i}`} key={i} className="one_recipe">
          <div
            style={{
              backgroundImage: `url(${recipe.recipe.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: " center",
              borderRadius: "30px 0px 30px 0px",
              width: "280px",
              height: "170px",
              boxShadow: "2px 2px 8px var(--shadow)",
              position: "absolute",
              pointerEvents: "none",
              zIndex: "1",
            }}
          ></div>

          <div className="info_recipe">
            <p>{recipe.recipe.mealType}</p>
          </div>

          <h3>{recipe.recipe.label}</h3>
        </NavLink>
      ))}
    </div>
  );
}
