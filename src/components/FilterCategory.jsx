import * as React from 'react';
import { useState, useContext } from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FilterCheckbox from './FilterCheckbox';
import { FilterContext } from '../context/FilterContext';

export default function FilterCategory() {

    const {categories, setCaloriesMin, setCaloriesMax, resetOnClick} = useContext(FilterContext)
return (
    <div className="innerFilter">
    {categories.map((category, index) => {return(
    <FormControl key={index} variant="standard" sx={{ m: 1, minWidth: 120}}>
        <InputLabel id={"demo-simple-select-standard"}>{category}</InputLabel>
        <Select labelId={"demo-simple-select-standard-label"} id={"demo-simple-select-standard"} label={category}>
            <FilterCheckbox categoryIndex={index} category={category}/>
        </Select>
    </FormControl>        
    )})}
    <div>
        <label for="caloriesMin">calories: from</label>
        <input type="number" id="caloriesMin" name="caloriesMin" min="0" max="2500" placeholder="0" onChange={(event) => setCaloriesMin(event.target.value)}></input>
        <label for="caloriesMax">to</label>
        <input type="number" id="caloriesMax" name="caloriesMax" min="0" max="2500" placeholder="2500" onChange={(event) => setCaloriesMax(event.target.value)}></input>
    </div>
    <button onClick={resetOnClick} >reset filters</button>
    </div>
    )
}