import * as React from 'react';
import { useState, useContext } from "react";
import { FormControlLabel} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {FormGroup} from '@mui/material';
import { FilterContext } from '../context/FilterContext';

export default function FilterCheckbox({categoryIndex, category}){
    const {indexContent, returnCheckedCategory, changeCheckedOfCategory , updateAllSelectedFilter} = useContext(FilterContext)
    const array = returnCheckedCategory(category)

    const handleOnChange = (selecFilter, indexOfThisFilter) => {
        const updatedChecked = array.map((check, index) => {
        if(indexOfThisFilter === index){
            return(!check)
        }
        else{return(check)}
        })
        changeCheckedOfCategory(updatedChecked, category);
        
        updateAllSelectedFilter(categoryIndex, selecFilter);
    }

    return(
    <FormGroup sx={{flexDirection: "row", flexWrap: "wrap", maxWidth: "670px", paddingLeft: "10px",  whiteSpace: "nowrap"}}>
        {indexContent[categoryIndex].map((selecFilter, index) => { return(
            <FormControlLabel key={index} label={selecFilter} control={
                <Checkbox value={selecFilter} id={`checkbox-${selecFilter}${index}`} checked={array[index]} 
                onChange={(event) => handleOnChange(selecFilter, index)} 
                inputProps={{ 'aria-label': 'controlled' }}/>}
            />)
        })}
    </FormGroup>
    )
}
