import { useState, useEffect, createContext } from "react";
import { client } from "../client";
import { searchTerm } from "../components/CookAi";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const [creators, setCreators] = useState();
  const [recipes, setRecipes] = useState();
  const [searchTerm, setSearchTerm] = useState();

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
  const fetchRecipes = async (searchTerm) => {
    let url = "https://api.edamam.com/api/recipes/v2?type=public&q=";

    try {
      if (searchTerm) {
        url =
          url +
          searchTerm +
          `&app_id=${process.env.REACT_APP_ID}` +
          `&app_key=${process.env.REACT_APP_KEY}`;
      }

      const recipesResponse = await fetch(url);
      const recipesData = await recipesResponse.json();
      setRecipes(recipesData.hits);
    } catch (error) {
      console.error(error);
    }
    console.log("data fetched", url);
    recipes && console.log(recipes);
  };

  //fetching data from Edamam
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <DataContext.Provider
      value={{ creators, recipes, fetchRecipes, setSearchTerm }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
