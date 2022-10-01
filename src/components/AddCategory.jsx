import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newCategory = inputValue.trim();
    if ( newCategory.length <=1 ) return;

    onNewCategory( newCategory );
    setInputValue('');

  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        className="form-control my-3"
        value={inputValue}
        onChange={onInputChange}
      />    
    </form>
    
  )
}
