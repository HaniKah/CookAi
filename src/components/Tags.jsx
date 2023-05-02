import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

export default function(){
    const { searchTerm } = useContext(DataContext);
    const { setSearchTerm } = useContext(DataContext);
    const { fetchRecipes } = useContext(DataContext);
    const { submitted } = useContext(DataContext);
    const [ array, setArray ] = useState([]);

    useEffect(()=>{
        if(searchTerm){
            setArray((prev)=>[prev, ...searchTerm])
            console.log(array)
        }
    }, [submitted])

    return(
        <div>
            {array?.map(term => <span>{term}</span>)}
        </div>
    )
}