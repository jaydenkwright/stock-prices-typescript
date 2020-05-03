import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { ParamTypes, stock, initStockData } from './Interfaces/StockInterface'
import News from './News'
import styles from './Stock.module.css'
import axios from 'axios'



export const Stock: React.FC = () => {
    const { symbol } = useParams<ParamTypes>()
    const [stockData, setStockData] = useState<stock>(initStockData)
    const [loaded, setLoaded] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const getStockData = async (s: string): Promise<void> => {
        setError(false)
        setLoaded(false)
        try{
            const res = await axios.get(`https://cloud.iexapis.com/stable/stock/${s}/quote?token=${process.env.REACT_APP_STOCK_KEY}`)
            setStockData(res.data)
            console.log(stockData)
            setLoaded(true)
        }catch(err){
            if(err.response.status === 404){
                setLoaded(true)
                setError(true)
                console.log('Not found')
            }
        }
    }
    useEffect(() => {
        getStockData(symbol)
    }, [symbol])
 
    const roundNumber = (num: number): string => {
        return num.toFixed(2)
    }

    const scroll = (): void => {
        document.getElementById('news').scrollIntoView({
            behavior: 'smooth'
        });
    }

    const { companyName, 
            primaryExchange, 
            open, 
            close,
            latestPrice, 
            iexRealtimePrice, 
            change, 
            changePercent, 
            high, 
            low 
            }: stock = stockData
    return (
        <div>
            {loaded ?
                error === false ?
                <div>
                    <div className={styles.stock}>
                        <div className={styles.title}>
                            <h1>{companyName}</h1>
                        </div>
                        <div className={styles.symbol}>{primaryExchange}: {stockData.symbol}</div>
                        <div className={styles.price}>
                            {iexRealtimePrice ? `$${iexRealtimePrice} ` : `$${latestPrice} `}
                        </div>
                        <div className={styles.change}>
                            {` ${change} (${roundNumber(changePercent*100)}%)`}
                        </div>
                        {high && low ? 
                            <div className={styles.highLow}>
                                <div className={styles.low}>
                                    <div className={styles.lowText}>{`$${roundNumber(low)}`}</div>
                                    <div className={styles.lowLabel}>Low</div>
                                </div>
                                <div className={styles.high}>
                                    <div className={styles.highText}>{`$${roundNumber(high)}`}</div>
                                    <div className={styles.highLabel}>High</div>
                                </div>
                            </div> 
                        : null}
                        {open && close ?
                            <div className={styles.openClose}>
                                <div className={styles.open}>
                                    <div className={styles.openText}>
                                        {`$${roundNumber(open)}`}
                                    </div>
                                    <div className={styles.openLabel}>
                                        Open
                                    </div>    
                                </div>
                                <div className={styles.low}>
                                    <div className={styles.lowText}>
                                        {`$${roundNumber(close)}`}
                                    </div>
                                    <div className={styles.lowLabel}>
                                        Close
                                    </div>    
                                </div>
                            </div>
                        : null}
                        <div className={styles.news}>
                            <div className={styles.newsTitle}>
                                <Link to="#" className={styles.newsLink} onClick={scroll}>News</Link>
                            </div>
                        </div>    
                    </div>
                    <News companyName={companyName} symbol={symbol}/>
                </div>
                : 'error'             
            : <div className={styles.loading}></div>
            }
        </div>
    )
}

export default Stock