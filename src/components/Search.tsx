import React, { useState } from 'react'
import styles from './Search.module.css'
import { withRouter, RouteComponentProps } from 'react-router-dom';

export const Search: React.FC<RouteComponentProps> = ({ history }) => {

    const [query, setQuery] = useState<string>('')

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value)
    }
    const submit = (e: React.FormEvent<HTMLInputElement> & React.KeyboardEvent<HTMLDivElement>) => {
        if( e.key === "Enter"){
            history.push(`/stock/${e.currentTarget.value}`)
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