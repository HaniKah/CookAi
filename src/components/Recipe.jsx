import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import LogoTxt from "./LogoTxt";
import LogoAlien from "./LogoAlien";

export default function Recipe() {
  const { recipes } = useContext(DataContext);
  const params = useParams();
  const myObject = recipes[params.id];
  const navigate = useNavigate();

  console.log("my object recipe", myObject);

  // varible for showoing imgage
  const recipeImage = {
    backgroundImage: `url(${myObject.recipe.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: " center",
    borderRadius: "0px 30px 0px 0px",
  };
  return (
    <div className="recipe">
      <div className="recipe_container">
        <div>
          <div className="recipe_main">
            <div className="recipe_img" style={recipeImage}></div>
            <div className="recipe_title">
              <div>
                <svg
                  onClick={() => navigate("/")}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
                </svg>
              </div>
              <h1>{myObject.recipe.label}</h1>
            </div>
            <div className="recipe_info">
              <div className="recipe_serving">
                <span>Servings</span>
                <div>
                  <button>+</button>
                  <span> 4 </span>
                  <button>-</button>
                </div>
              </div>
              <div className="recipe_info_box">
                <div className="recipe_info_box_left">
                  <div className="recipe_ingredients">
                    <h3>Ingredients</h3>
                    {myObject.recipe.ingredients.map((object, index) => {
                      if (object.measure === "<unit>") {
                        return (
                          <p key={index}>
                            <span>{object.quantity} </span>
                            <span>{object.food}</span>
                          </p>
                        );
                      } else {
                        return (
                          <p key={index}>
                            <span>{object.quantity} </span>
                            <span>{object.measure} </span>
                            <span>{object.food}</span>
                          </p>
                        );
                      }
                    })}
                  </div>
                </div>
                <div className="recipe_info_box_right">
                  <div className="recipe_nutrition">
                    <div className="recipe_nutrition_box_kcal">
                      <p>kcal</p>
                      <span>{Math.round(myObject.recipe.calories)}</span>
                    </div>
                    <div className="recipe_nutrition_box">
                      <p>fat</p>
                      <span>
                        {Math.round(myObject.recipe.digest[0].total)}g
                      </span>
                    </div>
                    <div className="recipe_nutrition_box">
                      <p>saturates</p>
                      <span>
                        {Math.round(myObject.recipe.digest[0].sub[0].total)}g
                      </span>
                    </div>
                    <div className="recipe_nutrition_box">
                      <p>cholesterol</p>
                      <span>
                        {Math.round(myObject.recipe.digest[3].total)}g
                      </span>
                    </div>
                    <div className="recipe_nutrition_box_carbs">
                      <p>carbs</p>
                      <span>
                        {Math.round(myObject.recipe.digest[1].total)}g
                      </span>
                    </div>
                    <div className="recipe_nutrition_box">
                      <p>sugars</p>
                      <span>
                        {Math.round(myObject.recipe.digest[1].sub[2].total)}g
                      </span>
                    </div>
                    <div className="recipe_nutrition_box">
                      <p>fiber</p>
                      <span>
                        {Math.round(myObject.recipe.digest[1].sub[1].total)}g
                      </span>
                    </div>
                    <div className="recipe_nutrition_box">
                      <p>protein</p>
                      <span>
                        {Math.round(myObject.recipe.digest[2].total)}g
                      </span>
                    </div>
                  </div>
                  <div className="recipe_instruction">
                    <a
                      href={myObject.recipe.url}
                      target="_blank"
                      className="recipe_button"
                    >
                      go to instructions
                    </a>
                  </div>
                </div>
              </div>
              <div className="recipe_tag">
                <h3>Health Labels</h3>
                {myObject.recipe.healthLabels.map((label, index) => {
                  return <span key={index}>{label}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="recipe_suggestions">
          <div className="recipe_suggestions_logo">
            <LogoTxt className="recipe_suggestions_txt" />
            <LogoAlien className="recipe_suggestions_alien" />
          </div>
          <div className="recipe_suggestions_result">
            <>
              {recipes
                ?.slice(Number(params.id) + 1, Number(params.id) + 5)
                .map((recipe, i) => (
                  <NavLink
                    to={`/${i + Number(params.id) + 1}`}
                    className="recipe_suggestions_box"
                    key={i}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${recipe.recipe.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        borderRadius: "0px 30px 0px 30px",
                        width: "250px",
                        height: "150px",
                        boxShadow: "2px 2px 8px var(--shadow)",
                        position: "relative",
                      }}
                    >
                      <h4>{recipe.recipe.label}</h4>
                    </div>
                  </NavLink>
                ))}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
