import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//FC
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Los padrinos magicos"]);

  /*  const handleAdd = () =>{
        setCategories( cats => [...cats,"Hunter"]) 
     } */

  return (
    <>
      <h1> Gif ExpertApp </h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};
