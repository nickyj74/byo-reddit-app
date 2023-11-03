
import React from 'react';
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import errorMessage from './components/errorMessage';
import dataView from './components/dataView';
import filterData from './components/filterData';

function App() {
  return (
    <>
    <Header className="App-header"/>
    <main>
      <Home />
    </main>
    </>
  );
}

export default App;






/* Pre-determined code below this point.  Need to write my own before deleting this. 

import logo from './logo.svg';
import './App.css';

function App() {
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/