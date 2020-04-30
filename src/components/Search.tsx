import React, { useState, useEffect } from 'react'
import styles from './Search.module.css'

export default function Search() {
    const [query, setQuery] = useState<string>('')

    const onChange = (e: any) => {
        setQuery(e.target.value)
    }

    return (
        <div>
            <div className={styles.searchBox}>
                <input 
                type="text"
                className={styles.searchBar}
                placeholder="Search for a stock symbol... ex: AAPL, TSLA, FB..."
                value={query}
                //onKeyPress={this.search}
                onChange={onChange}
                />
            </div>
        </div>
    )
}
