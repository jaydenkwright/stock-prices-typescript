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

  console.log(searchQuery)
  return (
    <Router>
      <div className="App">
            <Route path="/">
              <Search searchQuery={setSearchQuery}/>
            </Route>
            <Route path="/stock/:symbol">
              <Stock />
            </Route>
      </div>
    </Router>
  );
}

export default App;
