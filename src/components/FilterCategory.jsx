import * as React from 'react';
import { useState, useContext } from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FilterCheckbox from './FilterCheckbox';
import { FilterContext } from '../context/FilterContext';

export default function FilterCategory() {

    const {categories} = useContext(FilterContext)
return (
    <div className="innerFilter">
    {categories.map((category, index) => {return(
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120}}>
        <InputLabel id={"demo-simple-select-standard"}>{category}</InputLabel>
        <Select labelId={"demo-simple-select-standard-label"} id={"demo-simple-select-standard"} label={category}>
            <FilterCheckbox categoryIndex={index} category={category}/>
        </Select>
    </FormControl>        
    )})}
    </div>
    )
}