import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import styles from './Stock.module.css'
import axios from 'axios'

export const Stock: React.FC = () => {
    interface stock{
        symbol: string,
        companyName: string,
        primaryExchange: string,
        calculationPrice: string,
        open: number,
        openTime: number,
        openSource: string,
        close: number,
        closeTime: number,
        closeSource: string,
        high: number,
        highTime: number,
        highSource: string,
        low: number,
        lowTime: number,
        lowSource: string,
        latestPrice: number,
        latestSource: string,
        latestTime: string,
        latestUpdate: number,
        latestVolume: number,
        iexRealtimePrice: number,
        iexRealtimeSize: number,
        iexLastUpdated: number,
        delayedPrice: number,
        delayedPriceTime: number,
        oddLotDelayedPrice: number,
        oddLotDelayedPriceTime: number,
        extendedPrice: number,
        extendedChange: number, 
        extendedChangePercent: number,
        extendedPriceTime: number,
        previousClose: number,
        previousVolume: number,
        change: number,
        changePercent: number,
        volume: number,
        iexMarketPercent: number,
        iexVolume: number,
        avgTotalVolume: number,
        iexBidPrice: number,
        iexBidSize: number,
        iexAskPrice: number,
        iexAskSize: number,
        iexOpen?: number | null,
        iexOpenTime?: number | null,
        iexClose: number,
        iexCloseTime: number,
        marketCap: number,
        peRatio: number,
        week52High: number,
        week52Low: number,
        ytdChange: number,
        lastTradeTime: number,
        isUSMarketOpen: boolean
    }
    const initStockData: stock = {
    "symbol":"",
    "companyName":"",
    "primaryExchange":"",
    "calculationPrice":"",
    "open":0,
    "openTime": 0,
    "openSource":"",
    "close":0,
    "closeTime":0,
    "closeSource":"",
    "high":0,
    "highTime":0,
    "highSource":"",
    "low":0,
    "lowTime":0,
    "lowSource":"",
    "latestPrice":0,
    "latestSource":"",
    "latestTime":"",
    "latestUpdate":0,
    "latestVolume":0,
    "iexRealtimePrice":0,
    "iexRealtimeSize":0,
    "iexLastUpdated":0,
    "delayedPrice":0,
    "delayedPriceTime":0,
    "oddLotDelayedPrice":0,
    "oddLotDelayedPriceTime":0,
    "extendedPrice":0,
    "extendedChange":0,
    "extendedChangePercent":0,
    "extendedPriceTime":0,
    "previousClose":0,
    "previousVolume":0,
    "change":0,
    "changePercent":0,
    "volume":0,
    "iexMarketPercent":0
    ,"iexVolume":0,
    "avgTotalVolume":0,
    "iexBidPrice":0,
    "iexBidSize":0,
    "iexAskPrice":0,
    "iexAskSize":0,
    "iexOpen":null,
    "iexOpenTime":null,
    "iexClose":0,
    "iexCloseTime":0,
    "marketCap":0,
    "peRatio":0,
    "week52High":0,
    "week52Low":0,
    "ytdChange":0,
    "lastTradeTime":0,
    "isUSMarketOpen":false}
    const { symbol } = useParams()
    const [stockData, setStockData] = useState<stock>(initStockData)
    const [loaded, setLoaded] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const getStockData = async (s: string) => {
        setError(false)
        setLoaded(false)
        try{
            const res = await axios.get(`https://cloud.iexapis.com/stable/stock/${s}/quote?token=${process.env.REACT_APP_STOCK_KEY}`)
            setStockData(res.data)
            console.log(stockData)
            console.log(res.data)
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

    const { companyName, primaryExchange, open, close, latestPrice, iexRealtimePrice, change, changePercent }: stock = stockData
    return (
        <div>
            {loaded ?
                error === false ?
                <div>
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
                </div>
                : 'error'
                
            : <div className={styles.loading}></div>
            }
        </div>
    )
}

export default Stock