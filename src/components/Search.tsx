import React, { useState, useEffect } from 'react'
import styles from './Search.module.css'
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface SearchProps{ 
    searchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: React.FC<SearchProps & RouteComponentProps> = ({ searchQuery, history }) => {

    const [query, setQuery] = useState<string>('')

    const onChange = (e: any) => {
        setQuery(e.target.value)
    }
    const submit = (e: any) => {
        if( e.key === "Enter"){
            searchQuery(e.target.value)
            console.log()
            //return <Redirect to='/fucksksk' />
            history.push(`/stock/${e.target.value}`)
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

export default withRouter(Search)