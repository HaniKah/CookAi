import { Popper } from "@mui/material";
import { useState } from "react";
import FilterCategory from "./FilterCategory";
import ClickAwayListener from '@mui/base/ClickAwayListener';

export default function Filter() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  
  const handleClickAway = () => {
    setOpen(false)
};

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget.parentNode);
    setOpen(true)
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
        <div className="filterfield">
          <span className="buttonSearchBar" onClick={handleClick}>
            Add Filters
          </span>
          <ClickAwayListener mouseEvent="onMouseUp" onClickAway={handleClickAway}>
            <Popper  className="innerFilter"
              sx={{ m: 1, mt: 6, maxWidth: "80%", borderRadius: "20px"}}
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
              }}>
              <FilterCategory />
            </Popper>          
          </ClickAwayListener>
        </div>
    </>
  );
}