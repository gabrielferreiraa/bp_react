'use strict';

/* Como estou usando CommonJS precisa importar tudo o que precisa,
não funciona global */
import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      text: 'Gabriel'
    };
  }

  render () {
    return (
      <div className='container' onClick={() => this.setState({
        text: 'Outro text'
      })}>
        {this.state.text}
      </div>
    );
  }
}

export default App;
