import { useState } from "react";
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One punch']);

  // const handleAdd = () => {
  //   setCategories([...categories,categories]);
  // }

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategories setCategories={setCategories} />
        <hr/>
        
        <ol>
          {  
            categories.map( (category,i) =>(
              <GifGrid 
                key={category} 
                category={category} 
              />
            ))
          }
        </ol>
        
      </>
  );

}
