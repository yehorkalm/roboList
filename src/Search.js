import React from 'react';

const Search = ({ searchChange }) => {
  return (
    <div className='tc pa2'>
      <input
        className='pa3  ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search for robots!'
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
