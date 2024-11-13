import React from "react"
import BetForm from "../components/BetForm"

const MarketPage = ({ match }) => {
  const marketId = match.params.id

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Market Details</h2>
      <BetForm marketId={marketId} />
    </div>
  )
}

export default MarketPage
