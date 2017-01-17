'use strict';

import React from 'react';
import ajax from '@fdaciuk/ajax';
import AppContent from './components/app-content';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    };
  }

  handleSearch (e) {
    const keyCode = e.witch || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${e.target.value}`)
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          }
        });
      });
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
      />
    );
  }
}

export default App;
