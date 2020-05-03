import React from 'react'
import styles from './News.module.css'

export const News: React.FC =() => {
    const getNewsData = () => {
    }
    return (
        <div className={styles.news}>
            <div className={styles.newsTitle}>
                News
            </div>
        </div>
    )
}

export default News
