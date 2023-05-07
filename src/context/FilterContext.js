import { useState, createContext } from "react";

export const FilterContext = createContext();

export default function FilterContextProvider(props) {

    const [dietSelectedFilters, setDietSelectedFilters] = useState([])
    const [healthSelectedFilters, setHealthSelectedFilters] = useState([])
    const [cuisineSelectedFilters, setCuisineSelectedFilters] = useState([])
    const [mealSelectedFilters, setMealSelectedFilters] = useState([])
    const [dishSelectedFilters, setDishSelectedFilters] = useState([])
    
    //Content for Checkboxes
    const [categories] = useState(["diet", "health", "cuisine", "meal", "dish"])
    const [diet] = useState(["balanced", "high-fiber", "high-protein", "low-carb", "low-fat","low-sodium"])
    const [health] = useState(["alcohol-cocktail",  "alcohol-free",  "celery-free",  "crustacean-free",  "dairy-free",  "DASH",  "egg-free",  "fish-free",  "fodmap-free",  "gluten-free",  "immuno-supportive",  "keto-friendly",  "kidney-friendly",  "kosher",  "low-fat-abs",  "low-potassium",  "low-sugar",  "lupine-free",  "mediterranean",  "mollusk-free",  "mustard-free",  "no-oil-added",  "paleo",  "peanut-free",  "pescatarian",  "pork-free",  "red-meat-free",  "sesame-free",  "shellfish-free",  "soy-free",  "sugar-conscious",  "sulfite-free",  "tree-nut-free",  "vegan",  "vegetarian",  "wheat-free"]);
    const [cuisine] = useState(["American", "Asian", "British", "Caribbean", "Central Europe", "Chinese", "Eastern Europe", "French", "Indian", "Italian", "Japanese", "Kosher", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "South American", "South East Asian"]);
    const [meal] = useState(["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"]);
    const [dish] = useState(["Biscuits and cookies", "Bread", "Cereals", "Condiments and sauces", "Desserts", "Drinks", "Main course", "Pancake", "Preps", "Preserve", "Salad", "Sandwiches", "Side dish", "Soup", "Starter", "Sweets"]);
    //For creating Checkboxes with .map
    const [indexContent] = useState({0: diet, 1: health, 2: cuisine, 3: meal, 4: dish});

    //For keepning Track of Changes in Checkbox
    const [categoriesContent] = useState({diet: diet, health: health, cuisine: cuisine, meal: meal, dish: dish})
    
    const [checked, setChecked] = useState({0: diet.map((filter) => filter == false), 
        1: health.map((filter) => filter == false), 2: cuisine.map((filter) => filter == false), 
        3: meal.map((filter) => filter == false), 4: dish.map((filter) => filter == false)})

    
    const [checkedDiet, setCheckedDiet] = useState(diet.map((filter) => filter == false))
    const [checkedHealth, setCheckedHealth] = useState(health.map((filter) => filter == false))
    const [checkedCuisine, setCheckedCuisine] = useState(cuisine.map((filter) => filter == false))
    const [checkedMeal, setCheckedMeal] = useState(meal.map((filter) => filter == false))
    const [checkedDish, setCheckedDish] = useState(dish.map((filter) => filter == false))

    const returnCheckedCategory = (category) => {
        if(category == "diet"){
            return checkedDiet
        }
        else if(category == "health"){
            return checkedHealth
        }
        else if(category == "cuisine"){
            return checkedCuisine
        }
        else if(category == "meal"){
            return checkedMeal
        }
        else if(category== "dish"){
            return checkedDish
        }
    }

    const changeCheckedOfCategory = (updatedChecked, category) => {
        if(category == "diet"){
            setCheckedDiet(updatedChecked)
        }
        else if(category == "health"){
            setCheckedHealth(updatedChecked)
        }
        else if(category == "cuisine"){
            setCheckedCuisine(updatedChecked)
        }
        else if(category == "meal"){
            setCheckedMeal(updatedChecked)
        }
        else if(category== "dish"){
            setCheckedDish(updatedChecked)
        }
    }

    const updateAllSelectedFilter = (categoryIndex, selecFilter) => {
        if(categoryIndex == 0){
            const index = dietSelectedFilters.findIndex(element => element == selecFilter)
            if(index == -1)
            setDietSelectedFilters([...dietSelectedFilters, selecFilter]);
            else{dietSelectedFilters.splice(index, 1);}
            console.log(dietSelectedFilters)
        };
        if(categoryIndex == 1){
            const index = healthSelectedFilters.findIndex(element => element == selecFilter)
            if(index == -1)
            setHealthSelectedFilters([...healthSelectedFilters, selecFilter]);
            else{healthSelectedFilters.splice(index, 1);}
            console.log(healthSelectedFilters)
        };
        if(categoryIndex == 2){
            const index = cuisineSelectedFilters.findIndex(element => element == selecFilter)
            if(index == -1)
            setCuisineSelectedFilters([...cuisineSelectedFilters, selecFilter]);
            else{cuisineSelectedFilters.splice(index, 1);}
            console.log(cuisineSelectedFilters)
        };
        if(categoryIndex == 3){
            const index = mealSelectedFilters.findIndex(element => element == selecFilter)
            if(index == -1)
            setMealSelectedFilters([...mealSelectedFilters, selecFilter]);
            else{mealSelectedFilters.splice(index, 1);}
            console.log(mealSelectedFilters)
        };
        if(categoryIndex == 4){
            const index = dishSelectedFilters.findIndex(element => element == selecFilter)
            if(index == -1)
            setDishSelectedFilters([...dishSelectedFilters, selecFilter]);
            else{dishSelectedFilters.splice(index, 1);}
            console.log(dishSelectedFilters)
        };
    }

return (
    <FilterContext.Provider
    value={{categories, indexContent, returnCheckedCategory, changeCheckedOfCategory , updateAllSelectedFilter, dietSelectedFilters, healthSelectedFilters, cuisineSelectedFilters, mealSelectedFilters, dishSelectedFilters}}>
    {props.children}
    </FilterContext.Provider>
    );
}