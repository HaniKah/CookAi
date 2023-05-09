import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkMod() {
  const {
    darkModeShow,
    darkModeBtn,
    darkMode,
    darkModeLight,
    darkModeDark,
    darkModeAuto,
    setDarkModeShow,
  } = useContext(ThemeContext);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (darkModeShow && !event.target.closest(".darkmode_active")) {
        setDarkModeShow(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [darkModeShow]);

  console.log("dark mode is", darkMode);

  return (
    <div
      onClick={darkModeBtn}
      className={darkModeShow ? "darkmode_active" : "darkmode"}
    >
      <fieldset className="fieldset">
        <label onClick={darkModeLight} for="light" className="darkmode_row">
          <input
            defaultChecked={darkMode}
            id="light"
            name="darkmode"
            type="radio"
          />
          <img src="../img/darkmode_light.jpg" />
          <div>light</div>
        </label>
        <label onClick={darkModeDark} for="dark" className="darkmode_row">
          <input id="dark" name="darkmode" type="radio" />
          <img src="../img/darkmode_dark.jpg" />
          <div>dark</div>
        </label>
        <label onClick={darkModeAuto} for="auto" className="darkmode_row">
          <input id="auto" name="darkmode" type="radio" />
          <img src="../img/darkmode_automatic.jpg" />
          <div>automatic</div>
        </label>
      </fieldset>
      <div className="darkmode_link">Darkmode</div>
    </div>
  );
}
