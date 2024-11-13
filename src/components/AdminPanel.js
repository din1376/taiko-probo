import React, { useState } from "react"
import { usePredictionMarket } from "../hooks/usePredictionMarket"

const AdminPanel = () => {
  const { createMarket, resolveMarket } = usePredictionMarket()
  const [description, setDescription] = useState("")
  const [endTime, setEndTime] = useState("")
  const [marketId, setMarketId] = useState("")
  const [outcome, setOutcome] = useState("")

  const handleCreateMarket = async (e) => {
    e.preventDefault()
    await createMarket(description, endTime)
    setDescription("")
    setEndTime("")
  }

  const handleResolveMarket = async (e) => {
    e.preventDefault()
    await resolveMarket(marketId, outcome)
    setMarketId("")
    setOutcome("")
  }

  return (
    <div>
      <h3 className="text-xl font-semibold">Admin Panel</h3>
      <form onSubmit={handleCreateMarket} className="space-y-4">
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          End Time (timestamp):
          <input
            type="number"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create Market</button>
      </form>
      <form onSubmit={handleResolveMarket} className="space-y-4 mt-8">
        <label>
          Market ID:
          <input
            type="number"
            value={marketId}
            onChange={(e) => setMarketId(e.target.value)}
            required
          />
        </label>
        <label>
          Outcome (1 for Yes, 2 for No):
          <input
            type="number"
            value={outcome}
            onChange={(e) => setOutcome(e.target.value)}
            required
          />
        </label>
        <button type="submit">Resolve Market</button>
      </form>
    </div>
  )
}

export default AdminPanel
