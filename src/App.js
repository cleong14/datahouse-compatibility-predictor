import React, { Component } from 'react';
import logo from './datahouse-logo.png';
import './App.css';
import db from './db.json';

class App extends Component {
  render() {
    console.log('DB', db);

    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Compatibility Predictor</h1>
        </header>

      </div>
    );
  }
}

export default App;
