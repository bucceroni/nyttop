import React, { Component } from 'react';

import axios from 'axios'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    science: {}
  }

  async componentDidMount() {
    
    // if (res.status >= 200 && res.status <= 207) {
    //   return this.setState({ science: res.data })
    // } else {
    //   throw new Error(`HTTP status ${res.status}`);
    // }
  }


  render() {
    const { science } = this.state
    let test = JSON.stringify(science)
    console.log(test)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            {test}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
