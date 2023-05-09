import { useState, useContext } from "react";
import domToImage from "dom-to-image";
import { saveAs } from "file-saver";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";

export default function MealPlaner() {
  const {
    setRecipesNamesBreakfast,
    setRecipesNamesDinner,
    setRecipesNamesLunch,
    setRecipesNamesSnack,
    setRecipesNamesTeatime,
    recipesNamesBreakfast,
    recipesNamesDinner,
    recipesNamesLunch,
    recipesNamesSnack,
    recipesNamesTeatime,
    recipeLabel,
    mealType,
  } = useContext(DataContext);
  const { darkMode } = useContext(ThemeContext);

  const saveMealPlaner = (event) => {
    domToImage.toBlob(document.querySelector("#toSave")).then(function (blob) {
      window.saveAs(blob, "myMealPlaner.png");
    });
  };

  const reset = () => {
    setRecipesNamesBreakfast([""]);
    setRecipesNamesDinner([""]);
    setRecipesNamesLunch([""]);
    setRecipesNamesSnack([""]);
    setRecipesNamesTeatime([""]);
  };

  const mealplanImage = {
    backgroundImage: darkMode
      ? "url(../img/mealplan_light.jpg)"
      : "url(../img/mealplan_dark.jpg)",
    width: "595px",
    height: "842px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: " center",
    borderRadius: "0px 30px 0px 30px",
    border: "2px solid var(--white)",
  };

  const h3 = {
    padding: "3px 0",
    fontWeight: "400",
    fontStyle: "norma",
    color: darkMode ? "#000" : "#fff",
  };

  return (
    <div className="MealPlanerContainer">
      <div className="buttonsContainerMealPlaner">
        <button onClick={saveMealPlaner} className="buttonMealPlaner">
          Print
        </button>
        <button onClick={reset} className="buttonMealPlaner">
          Reset All
        </button>
      </div>
      <div id={"toSave"} style={mealplanImage}>
        <div className="MealPlanerDate"></div>
        <div className="MealPlanerCategoryContainer">
          <div class="MealPlanerCategory" id="Breakfast">
            {recipesNamesBreakfast?.map((name) => (
              <h3 style={h3}>{name}</h3>
            ))}
          </div>
          <div class="MealPlanerCategory" id="Dinner">
            {recipesNamesDinner?.map((name) => (
              <h3 style={h3}>{name}</h3>
            ))}
          </div>
          <div class="MealPlanerCategory" id="Lunch">
            {recipesNamesLunch?.map((name) => (
              <h3 style={h3}>{name}</h3>
            ))}
          </div>
          <div class="MealPlanerCategory" id="Snack">
            {recipesNamesSnack?.map((name) => (
              <h3 style={h3}>{name}</h3>
            ))}
          </div>
          <div class="MealPlanerCategory" id="Teatime">
            {recipesNamesTeatime?.map((name) => (
              <h3 style={h3}>{name}</h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
