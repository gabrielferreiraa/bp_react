'use strict';

import React from 'react';

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      id='input'
      placeholder='Digite o nome do usuario no GitHub'
      onKeyUp={handleSearch} />
  </div>
);

export default Search;
