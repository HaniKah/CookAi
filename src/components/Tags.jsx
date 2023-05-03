import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

export default function(){
    const { searchTerm, setSearchTerm, submitted, setArray, array, fetchRecipes } = useContext(DataContext);

    useEffect(()=>{
        if(searchTerm){
            setArray((prev)=>[...prev, ...searchTerm])
        }
    }, [submitted])

    console.log(array)
    return(
        <div>
            {array?.map((term, key) => <span key={key} className="tag">{term}</span>)}
        </div>
    )
}
