import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

export const Stock: React.FC = () => {
    const { symbol } = useParams()
    console.log(process.env.REACT_APP_STOCK_KEY)
    const getStockData = async () => {
        const res = await axios(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.REACT_APP_STOCK_KEY}`)
        console.log(res.data)
    }

    useEffect(() => {
        getStockData()
    }, [])

    return (
        <div>
            {symbol}
        </div>
    )
}

export default Stock