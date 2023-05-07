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
  const conditionsForRecipeFetch = "&random=true&field=dietLabels&field=healthLabels&field=ingredients&field=cuisineType&field=mealType&field=dishType"
  const { dietSelectedFilters, healthSelectedFilters, cuisineSelectedFilters, mealSelectedFilters, dishSelectedFilters } = useContext(FilterContext);

  const dietSelectedFiltersModified = dietSelectedFilters.map(i => '&diet=' + i);
  const healthSelectedFiltersModified = healthSelectedFilters.map(i => '&health=' + i);
  const cuisineSelectedFiltersModified = cuisineSelectedFilters.map(i => '&cuisine=' + i);
  const mealSelectedFiltersModified = mealSelectedFilters.map(i => '&meal=' + i);
  const dishSelectedFiltersModified = dishSelectedFilters.map(i => '&dish=' + i);

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

  console.log(healthSelectedFiltersModified)

  // fatching data from Contetful for displaying creators
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
          dishSelectedFiltersModified.join("");
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
  }, [array]);

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
