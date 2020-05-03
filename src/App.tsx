import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from './App.module.css'
import Stock from './components/Stock'
import Search from './components/Search'
import News from './components/News'

function App() {
  console.log(process.env.REACT_APP_NEWS_KEY)
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <Search/>
        </Route>
        <Route path="/stock/:symbol">
          <Stock />
          <News />
        </Route>
      </div>
    </Router>
  );
}

export default App;
