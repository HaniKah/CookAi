import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";
import Tags from "./Tags";
import Filter from "./Filter";
import RecipeList from "./RecipeList";
import TypeWriterAi from "./TypeWriterAi";
import { PacmanLoader } from "react-spinners";
import LogoTxt from "./LogoTxt";

export default function CookAi() {
  const {
    setSearchTerm,
    fetchRecipes,
    setSubmitted,
    submitted,
    loading,
    setLoading,
  } = useContext(DataContext);
  const { afterSubmission, hide, darkMode } = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState();

  console.log(`loading is ${loading}`);

  const handleChange = (event) => {
    let value = event.target.value
      .toLowerCase()
      .replace(/[;,]/g, " ")
      .replace(/[/^_#+-/"!({}$°~§)?:%²³&.=`*'><123456789]/g, "")
      .replace("and", "")
      .split(" ");
    const onlyWords = value.filter((word) => word.length > 1);
    setInputValue(onlyWords);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipes(inputValue);
    setSubmitted(!submitted);
    setSearchTerm(inputValue);
    event.target.reset();
    setInputValue([]);
    afterSubmission();
    setLoading(true);
  };

  const typeWrighterStyle = {
    fontWeight: "300",
    padding: "1em",
    fontSize: "large",
    color: darkMode ? "var(--text)" : "var(--white)",
  };

  return (
    <div className="cookAi">
      {darkMode ? (
        <img
          className={hide ? "logo_img_hide" : "logo_img"}
          src="../img/logo_light.svg"
          alt="Logo in light veriant"
        />
      ) : (
        <img
          className={hide ? "logo_img_hide" : "logo_img"}
          src="../img/logo_dark.svg"
          alt="Logo in light veriant"
        />
      )}
      {darkMode ? (
        <img
          className="logo_txt_svg"
          src="../img/logo_txt_light.svg"
          alt="CookAi text logo"
        />
      ) : (
        <img
          className="logo_txt_svg"
          src="../img/logo_txt_dark.svg"
          alt="CookAi text logo"
        />
      )}
      <h5 style={typeWrighterStyle} className={hide ? "hide" : ""}>
        <TypeWriterAi />
      </h5>
      <h5 className={hide ? "" : "hide"}>givemeingriedentstomakeamealforyou</h5>
      <form className="searchBar" onSubmit={handleSubmit}>
        <Filter />
        <input
          className={hide ? "cookAi_input_hide" : "cookAi_input"}
          onChange={handleChange}
          placeholder="add your ingredients"
        />
        <Tags />
        <div></div>
      </form>
      <PacmanLoader color="var(--dark_accent)" loading={loading} size={35} />
      <div>
        <RecipeList />
      </div>
    </div>
  );
}
