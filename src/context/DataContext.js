import { useState, useEffect, createContext } from "react";
import { client } from "../client";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const [creators, setCreators] = useState();
  const [recipes, setRecipes] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [array, setArray] = useState([]);

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
          searchTerm +
          `&app_id=${process.env.REACT_APP_ID}` +
          `&app_key=${process.env.REACT_APP_KEY}`;
        const recipesResponse = await fetch(url);
        const recipesData = await recipesResponse.json();
        setRecipes(recipesData.hits);
      }
    } catch (error) {
      console.error(error);
    }
  };
  recipes && console.log(recipes);
  //fetching data from Edamam
  useEffect(() => {
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
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
