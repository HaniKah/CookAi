import { useState, useEffect, createContext } from "react";
import { client } from "../client";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const [creators, setCreators] = useState();

  // fatching data from Contetful for displaying creators
  useEffect(() => {
    client
      .getEntries()
      .then((data) => {
        setCreators(data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DataContext.Provider value={{ creators }}>
      {props.children}
    </DataContext.Provider>
  );
}
