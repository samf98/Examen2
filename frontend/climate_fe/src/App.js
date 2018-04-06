import React, { Component } from 'react';
import './App.css';
import ClimatesContainer from './components/ClimatesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Climate History</h1>
        </div>
        <ClimatesContainer />
      </div>
    );
  }
}

export default App
