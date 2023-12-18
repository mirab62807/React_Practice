import React from "react";


const SearchBox = ({SearchField, SearchChange}) =>{
    return(
        <div className="tc pa2">
        <input 
        className='pa3 ba b--green bg-light-blue' 
        type='search'
        placeholder="Search Robots" 
        onChange = {SearchChange}
        />
        </div>
    );
};


export default SearchBox;