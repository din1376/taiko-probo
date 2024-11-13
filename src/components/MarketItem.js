import React from "react"
import { Link } from "react-router-dom"

const MarketItem = ({ market }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold">{market.description}</h3>
      <p>End Time: {new Date(market.endTime * 1000).toLocaleString()}</p>
      <p>Status: {market.resolved ? "Resolved" : "Active"}</p>
      <Link
        to={`/market/${market.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  )
}

export default MarketItem
