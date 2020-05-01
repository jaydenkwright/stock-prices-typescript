import React, { useState, useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.css'
import Stock from './components/Stock'
import Search from './components/Search'

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('')
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
