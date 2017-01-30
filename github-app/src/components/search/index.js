'use strict';

import React, { PropTypes } from 'react';
import style from './search.css';

const Search = ({ handleSearch, isDisabled }) => (
  <div className={style.search}>
    <input
      type='search'
      id='input'
      placeholder='Digite o nome do usuario no GitHub'
      onKeyUp={handleSearch}
      disabled={isDisabled} />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default Search;
