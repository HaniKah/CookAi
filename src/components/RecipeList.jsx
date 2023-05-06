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
              borderRadius: "0px 30px 0px 30px",
              width: "280px",
              height: "170px",
              boxShadow: "5px 5px 10px grey",
              position: "absolute",
              top: "10px",
            }}
            className="recipeList_img"
          ></div>

          <div className="info_recipe">
            <h4>{recipe.recipe.label}</h4>
            <p>recipe paragaph</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
