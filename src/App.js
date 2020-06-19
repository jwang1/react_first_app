import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Hacker News" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link2"
          href="https://iExpress.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hacker News (My latest updates)
        </a>
      </header>
    </div>
  );
}

export default App;
