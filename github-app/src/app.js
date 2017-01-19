'use strict';

import React from 'react';
import axios from 'axios';
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

  populateInformationsAPI (login) {
    return axios.get(`https://api.github.com/users/${login}`)
          .then(result => {
            result = result.data;
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

  handleSearch (e) {
    const keyCode = e.witch || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      const value = e.target.value;
      this.populateInformationsAPI(value);
    }
  }

  /* Utilizando High Order Functions */
  getRepos (type) {
    return (e) => {
      axios.get(`https://api.github.com/users/gabrielferreiraa/${type}`)
        .then((result) => {
          var data = result.data;
          this.setState({
            [type]: data.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            }))
          });
        });
    };
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
