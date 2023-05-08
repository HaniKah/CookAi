import { Popover } from "@mui/material";
import { useState, useContext } from "react";
import FilterCategory from "./FilterCategory";
import { ThemeContext } from "../context/ThemeContext";

export default function Filter() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { hide } = useContext(ThemeContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget.parentNode);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className="filterfield">
        <span
          className={hide ? "buttonSearchBar_hide" : "buttonSearchBar"}
          onClick={handleClick}
        >
          Add Filters
        </span>
        <Popover
          sx={{ m: 1, mt: 6, maxWidth: "80%" }}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "button",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <FilterCategory />
        </Popover>
      </div>
    </>
  );
}
