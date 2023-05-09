import { useState, createContext, useEffect } from "react";
export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [darkModeShow, setDarkModeShow] = useState(false);

  const afterSubmission = function () {
    setHide(true);
  };
  const toggleHandler = function () {
    setShow(!show);
  };

  useEffect(() => {
    document.body.classList.add("body");
  }, []);

  const darkModeBtn = function () {
    setDarkModeShow(true);
  };

  const darkModeLight = function () {
    document.body.classList.add("body");
    document.body.classList.remove("body_dark");
    setDarkMode(true);
  };

  const darkModeDark = function () {
    document.body.classList.add("body_dark");
    document.body.classList.remove("body");
    setDarkMode(false);
  };

  const darkModeAuto = function () {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("body_dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        hide,
        setHide,
        afterSubmission,
        show,
        toggleHandler,
        setShow,
        darkModeShow,
        darkModeBtn,
        darkMode,
        darkModeLight,
        darkModeDark,
        darkModeAuto,
        setDarkModeShow,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
