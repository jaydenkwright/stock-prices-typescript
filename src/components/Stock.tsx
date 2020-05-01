import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
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
        iexOpen?: any,
        iexOpenTime?: any,
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
    const { symbol } = useParams()
    const [stockData, setStockData] = useState<stock>({"symbol":"","companyName":".","primaryExchange":"","calculationPrice":"","open":289.98,"openTime":1588253400708,"openSource":"official","close":293.8,"closeTime":1588276800499,"closeSource":"official","high":294.53,"highTime":1588291197990,"highSource":"15 minute delayed price","low":288.35,"lowTime":1588253833057,"lowSource":"15 minute delayed price","latestPrice":293.8,"latestSource":"Close","latestTime":"April 30, 2020","latestUpdate":1588276800499,"latestVolume":44392932,"iexRealtimePrice":297,"iexRealtimeSize":58,"iexLastUpdated":1588278617586,"delayedPrice":293.8,"delayedPriceTime":1588277699554,"oddLotDelayedPrice":292.38,"oddLotDelayedPriceTime":1588279871388,"extendedPrice":286.3,"extendedChange":-7.5,"extendedChangePercent":-0.02553,"extendedPriceTime":1588291197990,"previousClose":287.73,"previousVolume":34320204,"change":6.07,"changePercent":0.0211,"volume":44392932,"iexMarketPercent":0.009173937869208549,"iexVolume":407258,"avgTotalVolume":48387376,"iexBidPrice":0,"iexBidSize":0,"iexAskPrice":0,"iexAskSize":0,"iexOpen":null,"iexOpenTime":null,"iexClose":293.39,"iexCloseTime":1588276796115,"marketCap":1285516024000,"peRatio":23.03,"week52High":327.85,"week52Low":170.27,"ytdChange":-0.020918,"lastTradeTime":1588276799512,"isUSMarketOpen":false})
    const [loaded, setLoaded] = useState<boolean>(false)
    const getStockData = async () => {
        setLoaded(false)
        try{
            const res = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.REACT_APP_STOCK_KEY}`)
            setStockData(res.data)
            console.log(stockData)
            console.log(res.data)
            setLoaded(true)
        }catch(err){
            if(err.response.status === 404){
                console.log('Not found')
            }
        }
    }
    useEffect(() => {
        getStockData()
    }, [symbol])

    return (
        <div>
            {loaded ?
            stockData.symbol
            : 'loading...'
            }
        </div>
    )
}

export default Stock