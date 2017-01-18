'use strict';

import React from 'react';

const Actions = ({ handleClickRepos }) => (
  <div className='actions'>
    <button onClick={handleClickRepos}>Ver repositórios</button>
    <button>Ver favoritos</button>
  </div>
);

export default Actions;
