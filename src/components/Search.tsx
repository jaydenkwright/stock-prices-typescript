import React, { useState, useEffect } from 'react'
import styles from './Search.module.css'

interface SearchProps { 
    searchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<SearchProps> = ({ searchQuery }) => {

    const [query, setQuery] = useState<string>('')

    const onChange = (e: any) => {
        setQuery(e.target.value)
    }
    const submit = (e: any) => {
        if( e.key === "Enter"){
            searchQuery(e.target.value)
        }
    }

    return (
        <div>
            <div className={styles.searchBox}>
                <input 
                type="text"
                className={styles.searchBar}
                placeholder="Search for a stock symbol... ex: AAPL, TSLA, FB..."
                value={query}
                onKeyPress={submit}
                onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Search