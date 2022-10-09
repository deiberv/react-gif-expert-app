import { useState } from "react";
import PropTypes from 'prop-types'

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
    <form onSubmit={onSubmit} aria-label="form">
      <input 
        type="text"
        className="form-control my-3"
        value={inputValue}
        onChange={onInputChange}
      />    
    </form>
    
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}