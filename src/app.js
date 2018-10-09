import React, { Component } from 'react';
import logo from './logo.svg';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Router
          </p>
        </header>

        <main>
          { this.props.children || '' }
        </main>
      </div>
    );
  }
}

export default App;
