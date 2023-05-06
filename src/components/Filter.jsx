import { Popover } from "@mui/material";
import { useState } from "react";
import FilterCategory from "./FilterCategory"

export default function Filter(){
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget.parentNode);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <>
        <div className="filterfield">
        <span className="buttonSearchBar" onClick={handleClick}>Add Filters</span>
            <Popover sx={{ m: 1 , mt: 6, maxWidth:"80%"}}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'button',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            ><FilterCategory/></Popover>
        </div>
        </>
    )
}
