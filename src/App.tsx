import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from './App.module.css'
import Stock from './components/Stock'
import Search from './components/Search'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <Search/>
        </Route>
        <Route path="/stock/:symbol">
          <Stock />
        </Route>
      </div>
    </Router>
  );
}

export default App;
