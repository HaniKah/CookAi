import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

export default function(){
    const { searchTerm, setSearchTerm, submitted, setArray, array, fetchRecipes } = useContext(DataContext);

    useEffect(()=>{
        console.log(`This is our ${searchTerm} before giving it to array`)
        if(searchTerm){
            setArray((prev)=>[...prev, ...searchTerm])
        }
        setSearchTerm([])
    }, [submitted])
    console.log(`This is our ${searchTerm}`)
    //console.log(array)
    return(
        <div>
            {array?.map((term, key) => <span key={key} className="tag">{term}</span>)}
        </div>
    )
}
