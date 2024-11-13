import React, { useEffect, useState } from "react"
import MarketItem from "./MarketItem"
import { usePredictionMarket } from "../hooks/usePredictionMarket"

const MarketList = () => {
  const { fetchMarkets } = usePredictionMarket()
  const [markets, setMarkets] = useState([])

  useEffect(() => {
    const loadMarkets = async () => {
      const data = await fetchMarkets()
      setMarkets(data)
    }
    loadMarkets()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Prediction Markets</h2>
      <div className="space-y-4">
        {markets.map((market) => (
          <MarketItem key={market.id} market={market} />
        ))}
      </div>
    </div>
  )
}

export default MarketList
