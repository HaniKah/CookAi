import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

export default function () {
  const {
    setSubmitted,
    searchTerm,
    setSearchTerm,
    submitted,
    setArray,
    array,
    fetchRecipes,
  } = useContext(DataContext);

  useEffect(() => {
    if (searchTerm) {
      setArray((prev) => [...prev, ...searchTerm]);
    }
    setSearchTerm([]);
  }, [submitted]);
  //console.log(array)

  function deleteTag(e) {
    const deleteThisOne = array.findIndex(
      (x) => x === e.target.getAttribute("datatext")
    );
    //console.log(deleteThisOne)
    console.log(array.splice(deleteThisOne, 1));
    console.log(array);
    setArray(array);
    setSubmitted(!submitted);
    console.log(array);
  }

  return (
    <div className="tagsContainer">
      {array?.map((term, index) => (
        <span onClick={deleteTag} key={index} className="tag">
          {term}
        </span>
      ))}
    </div>
  );
}
