import { useState, useContext } from "react";
import domToImage from "dom-to-image";
import { saveAs } from "file-saver";
import { DataContext } from "../context/DataContext";

export default function MealPlaner() {

    const { setRecipesNamesBreakfast, setRecipesNamesDinner, setRecipesNamesLunch, setRecipesNamesSnack, setRecipesNamesTeatime, 
        recipesNamesBreakfast, recipesNamesDinner, recipesNamesLunch, recipesNamesSnack, recipesNamesTeatime, recipeLabel, mealType} = useContext(DataContext);


const saveMealPlaner = (event) => {
    domToImage
        .toBlob(document.querySelector("#toSave"))
        .then(function (blob) {
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

return (
    <div className="MealPlanerContainer">
        <div className="buttonsContainerMealPlaner">
            <button onClick={saveMealPlaner} className="buttonMealPlaner">Print</button>
            <button onClick={reset} className="buttonMealPlaner">Reset All</button>
        </div>
        <div id="toSave">
            <div class="MealPlanerCategory" id="Breakfast">Breakfast</div>
                {recipesNamesBreakfast?.map((name) => <h3>{name}</h3>)}
            <div class="MealPlanerCategory" id="Dinner">Dinner</div>
                {recipesNamesDinner?.map((name) => <h3>{name}</h3>)}
            <div class="MealPlanerCategory" id="Lunch">Lunch</div>
                {recipesNamesLunch?.map((name) => <h3>{name}</h3>)}
            <div class="MealPlanerCategory" id="Snack">Snack</div>
                {recipesNamesSnack?.map((name) => <h3>{name}</h3>)}
            <div class="MealPlanerCategory" id="Teatime">Teatime</div>
                {recipesNamesTeatime?.map((name) => <h3>{name}</h3>)}
        </div>
    </div>
);
}