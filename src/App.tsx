import React, { useState, useEffect } from 'react'
import './App.css';
import styles from './App.module.css'
import Stock from './components/Stock'
import Search from './components/Search'

function App() {
  const [stockData, setStockData] = useState([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isSearch, setIsSearching] = useState<boolean>(false)

  return (
    <div className="App">
      <Search searchQuery={setSearchQuery}/>
      <Stock searchQuery={searchQuery}/>
    </div>
  );
}

export default App;
