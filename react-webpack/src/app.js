'use strict';

/* Como estou usando CommonJS precisa importar tudo o que precisa,
não funciona global */
import React, { Component } from 'react';

class App extends Component {
  constructor () {
    console.log('constructor');
    super();
    this.state = {
      time: 0,
      showTimer: true
    };
  }

  componentWillMount () {
    console.log('Executado antes do método render');
  }

  componentDidMount () {
    console.log('Após o método render');
  }

  render () {
    console.log('render');
    return (
      <div>
        My App
      </div>
    );
  }
}

export default App;
