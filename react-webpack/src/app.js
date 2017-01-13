'use strict';

/* Como estou usando CommonJS precisa importar tudo o que precisa,
não funciona global */
import React, { Component } from 'react';
import Timer from './timer';

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
        <Timer time={this.state.time} />
        <button onClick={() => this.setState({ time: this.state.time + 10 })}>Change Props</button>
      </div>
    );
  }
}

export default App;
