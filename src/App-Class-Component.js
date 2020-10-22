import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: 'Jayaprakash',
      isLoggedIn: true,
      monsters: [
        { name: 'Dragula' },
        { name: 'Zombie' },
        { name: 'Frozen' }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hi Mr.<span>{this.state.userName}</span>
          </a>
          <button className="btn" onClick={() => this.setState({ userName: 'Ram kumar' })}> Change User Name</button>
        </header>
      </div>
    );
  }
}

export default App;