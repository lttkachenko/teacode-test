import React from 'react';

import { AppDataProvider } from "./contexts";

import logo from './logo.svg';
import './App.scss';

const App = () => (
  <AppDataProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
  </AppDataProvider>
);

export default App;
