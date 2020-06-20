import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const fname = "John";
  const lname = "Doe";
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-div">
          <span><u>Hello <i>{fname} {lname}!</i></u></span>
        </div>

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
