import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);
  const onNewCategory = (newCategory) => {
    
    if( categories.includes(newCategory) ) return;

    setCategories([newCategory, ...categories]);
  }
  return (
    <div className="container">
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={ (newCategory) => onNewCategory(newCategory)}
      />
      
      { 
        categories.map( (cat) => (
          <GifGrid key={cat} category={cat} /> 
        )) 
      }
    </div>
  )
}

export default GifExpertApp