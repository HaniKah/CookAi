import { useState, createContext } from "react";
export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [hide, setHide] = useState(false);

  const afterSubmission = function () {
    setHide(true);
  };

  return (
    <ThemeContext.Provider value={{ hide, setHide, afterSubmission }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
