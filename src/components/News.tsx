import React, { useState, useEffect } from 'react'
import styles from './News.module.css'
import axios from 'axios'

export const News: React.FC =() => {

    interface article{
        author: string,
        content: string,
        description: string,
        publishedAt: string,
        source: {
            id: any,
            name: string
        },
        title: string,
        url: string,
        urlToImage: string
    }

    const [newsData, setNewsData] = useState<article[]>([])

    const getNewsData = async (): Promise<void> => {
        try{
            const res = await axios.get(`https://newsapi.org/v2/everything?q=google&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
            console.log(res.data.articles)
            setNewsData(res.data.articles)
            console.log(newsData)
            //res.data.articles.map((article: any) => console.log(article.title))
        }catch(err){
            
        }
    }

    useEffect(() => {
        getNewsData()
    }, [])
    return (
        <div className={styles.news}>
            <div className={styles.newsTitle}>
                News
                {
                    newsData.map((a: any) => <div>{a.title}</div>)
                }
            </div>
        </div>
    )
}

export default News
