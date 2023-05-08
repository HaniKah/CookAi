import { useState, createContext, useEffect } from "react";
export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);

  const afterSubmission = function () {
    setHide(true);
  };
  const toggleHandler = function () {
    setShow(!show);
  };

  return (
    <ThemeContext.Provider
      value={{ hide, setHide, afterSubmission, show, toggleHandler, setShow }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
