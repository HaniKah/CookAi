import { useContext } from "react";
import { DataContext } from "../context/DataContext";
export default function RecipeList() {
  const { recipes } = useContext(DataContext);

  return (
    <div className="recipeList_container">
      {recipes?.map((recipe) => (
        <div className="one_recipe">
          <div
            style={{
              background: `url(${recipe.recipe.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: " center",
              borderRadius: "0px 45px 0px 45px",
            }}
            className="recipeList_img"
          ></div>

          <div className="info_recipe">
            <h4>{recipe.recipe.label}</h4>
            <p>recipe paragaph</p>
          </div>
        </div>
      ))}
    </div>
  );
}
