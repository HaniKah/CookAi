import { useState, useEffect, createContext, useContext } from "react";
import { client } from "../client";
import { FilterContext } from '../context/FilterContext';

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const [creators, setCreators] = useState();
  const [recipes, setRecipes] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dietSelectedFilters, healthSelectedFilters, cuisineSelectedFilters, mealSelectedFilters, dishSelectedFilters, caloriesMax, caloriesMin } = useContext(FilterContext);

  const [caloriesArray, setCaloriesArray] = useState([])
  const dietSelectedFiltersModified = dietSelectedFilters.map(i => '&diet=' + i);
  const healthSelectedFiltersModified = healthSelectedFilters.map(i => '&health=' + i);
  const cuisineSelectedFiltersModified = cuisineSelectedFilters.map(i => '&cuisine=' + i);
  const mealSelectedFiltersModified = mealSelectedFilters.map(i => '&meal=' + i);
  const dishSelectedFiltersModified = dishSelectedFilters.map(i => '&dish=' + i);

console.log(dietSelectedFiltersModified, dietSelectedFilters)
  useEffect(() => {
    if(caloriesMin != undefined && caloriesMax != undefined){
      const myarray = [caloriesMin, caloriesMax]
      function compareNumbers(a, b) {
        return a - b;
      }
      myarray.sort(compareNumbers)
      setCaloriesArray(`&calories=`+myarray.join("-"))
    }
  }, [caloriesMax, caloriesMin]);


  // if(healthSelectedFiltersModified.length > 0){
  //   healthSelectedFiltersModified.unshift("&health=")
  // }
  // if(cuisineSelectedFiltersModified.length > 0){
  //   cuisineSelectedFiltersModified.unshift("&cuisine=")
  // }
  // if(mealSelectedFiltersModified.length > 0){
  //   mealSelectedFiltersModified.unshift("&meal=")
  // }
  // if(dishSelectedFiltersModified.length > 0){
  //   dishSelectedFiltersModified.unshift("&dish=")
  // }

  // fetching data from Contetful for displaying creators
  useEffect(() => {
    client
      .getEntries()
      .then((data) => {
        setCreators(data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  // declaring fetch function for edamam-API
  const fetchRecipes = async () => {
    let url = "https://api.edamam.com/api/recipes/v2?type=public&q=";

    try {
      if (array.length) {
        url =
          url +
          array.join("%20") +
          `&app_id=${process.env.REACT_APP_ID}` +
          `&app_key=${process.env.REACT_APP_KEY}` +
          dietSelectedFiltersModified.join("") +
          healthSelectedFiltersModified.join("") +
          cuisineSelectedFiltersModified.join("") +
          mealSelectedFiltersModified.join("") +
          dishSelectedFiltersModified.join("") +
          caloriesArray;
        const recipesResponse = await fetch(url);
        const recipesData = await recipesResponse.json();
        setLoading(false);
        setRecipes(recipesData.hits);
      }
    } catch (error) {
      console.error(error);
    }
  };

  recipes && console.log(recipes);
  //fetching data from Edamam
  useEffect(() => {
    console.log(`MySearchTerm${searchTerm}`);
    fetchRecipes();
  }, [array, dietSelectedFilters, healthSelectedFilters, cuisineSelectedFilters, mealSelectedFilters, dishSelectedFilters]);

  return (
    <DataContext.Provider
      value={{
        creators,
        recipes,
        fetchRecipes,
        setSearchTerm,
        searchTerm,
        submitted,
        setSubmitted,
        array,
        setArray,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
