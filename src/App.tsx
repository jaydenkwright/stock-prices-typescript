import React, { useState, useEffect } from 'react'
import './App.css';
import styles from './App.module.css'
import Stock from './components/Stock'
import Search from './components/Search'

function App() {
  const [stockData, setStockData] = useState([])
  const [query, setQuery] = useState<string | null>('')
  const [isSearch, setIsSearching] = useState<boolean>(false)

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
