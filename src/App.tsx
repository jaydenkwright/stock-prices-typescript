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
  const [stockData, setStockData] = useState([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isSearch, setIsSearching] = useState<boolean>(false)

  return (
    <Router>
      <div className="App">
            <Search searchQuery={setSearchQuery}/>
            <Route path="/">
            </Route>
            <Route path="/stock/:symbol">
              <Stock searchQuery={searchQuery}/>
            </Route>
      </div>
    </Router>
  );
}

export default App;
