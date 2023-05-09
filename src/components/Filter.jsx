import { Popper } from "@mui/material";
import { useState, useContext } from "react";
import FilterCategory from "./FilterCategory";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { ThemeContext } from "../context/ThemeContext";

export default function Filter() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const { hide } = useContext(ThemeContext);

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget.parentNode);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="filterfield">
        <span
          className={hide ? "buttonSearchBar_hide" : "buttonSearchBar"}
          onClick={handleClick}
        >
          Add Filters
        </span>
        <ClickAwayListener mouseEvent="onMouseUp" onClickAway={handleClickAway}>
          <Popper
            className="innerFilter"
            sx={{ m: 1, mt: 6, maxWidth: "80%", borderRadius: "20px" }}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchororigin={{
              vertical: "button",
              horizontal: "left",
            }}
            transformorigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <FilterCategory />
          </Popper>
        </ClickAwayListener>
      </div>
    </>
  );
}
