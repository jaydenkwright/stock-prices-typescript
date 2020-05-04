import React, { useState, useEffect } from 'react'
import { Props, Article } from './Interfaces/NewsInterface'
import styles from './News.module.css'
import axios from 'axios'


export const News: React.FC<Props> =({ companyName, symbol}) => {
    const [newsData, setNewsData] = useState<Article[]>([])
    const getNewsData = async (): Promise<void> => {
        try{
            const res = await axios.get(`https://newsapi.org/v2/everything?q=${companyName}+${symbol}&apiKey=${process.env.REACT_APP_NEWS_KEY}&language=en&pageSize=10`)
            console.log(res.data.articles)
            setNewsData(res.data.articles)
        }catch(err){
            
        }
    }

    useEffect(() => {
        getNewsData()
    }, [symbol])

    return (
        <div className={styles.news}>
            {
                newsData.map((article: any) => (
                    <div className={styles.newsContainer}>
                        <div className={styles.title}>
                            <a href={article.url} className={styles.links} target='_blank' rel="noopener noreferrer">{article.title}</a>
                        </div>
                        <div className={styles.description}>
                            {article.description.replace(/(<([^>]+)>)/ig,"")}
                        </div>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default News
