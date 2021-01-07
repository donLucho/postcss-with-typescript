import React from 'react';
import logo from './logo.svg';

// import './App.css';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hotel One</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hotel Two</h2>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h3>Hotel Three</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h4>Hotel Four</h4>
        <blockquote>I am a blockquote. Nothing to see!</blockquote>
        <h5>Hotel Five</h5>
        <p>
          <code>I am a line of code! Ditto above.</code>
        </p>
        <h6>Hotel Six</h6>
        <p>
          I am testing the postcss variables and they <code>still do not</code> seem to work!
        </p>
      </header>
    </div>
  );
}

export default App;
