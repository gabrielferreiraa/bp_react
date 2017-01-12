'use strict';

/* Como estou usando CommonJS precisa importar tudo o que precisa,
não funciona global */
import React, { Component } from 'react';
import Title from './title';

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Title name='Gabriel' />
      </div>
    );
  }
}

export default App;
