import React, { Component } from 'react';
import './../styles/App.css';

class App extends Component {
  state = {
    name: 'React App',
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to {this.state.name}</h1>
        </header>
      </div>
    );
  }
}

export default App;
