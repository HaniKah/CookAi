import { useState, createContext } from "react";
export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [hide, setHide] = useState(false);
<<<<<<< Updated upstream
=======
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [darkModeShow, setDarkModeShow] = useState(false);
  const [clickCount, setClickCount] = useState(false);
>>>>>>> Stashed changes

  const afterSubmission = function () {
    setHide(true);
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

  console.log("else", clickCount);

  useEffect(() => {
    if (clickCount === true) {
      console.log("IF click");
      if (darkModeShow === true) {
        document.body.addEventListener("click", function unselect() {
          console.log("click");
          setDarkModeShow(false);
          document.body.removeEventListener("click", unselect);
        });
      }
    } else {
      setClickCount(!clickCount);
      console.log("else", clickCount);
      console.log("DarkModeShow", darkModeShow);
    }
  }, [darkModeShow]);

  return (
<<<<<<< Updated upstream
    <ThemeContext.Provider value={{ hide, setHide, afterSubmission }}>
=======
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
      }}
    >
>>>>>>> Stashed changes
      {props.children}
    </ThemeContext.Provider>
  );
}
