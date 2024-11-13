import React, { useState } from "react"
import { usePredictionMarket } from "../hooks/usePredictionMarket"

const BetForm = ({ marketId }) => {
  const { placeBet } = usePredictionMarket()
  const [betAmount, setBetAmount] = useState("")
  const [betYes, setBetYes] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await placeBet(marketId, betYes, betAmount)
    setBetAmount("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Place a Bet</h3>
      <label>
        <span>Bet Amount (in ETH):</span>
        <input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          className="mt-1 block w-full"
          required
        />
      </label>
      <div>
        <label>
          <input
            type="radio"
            checked={betYes}
            onChange={() => setBetYes(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            checked={!betYes}
            onChange={() => setBetYes(false)}
          />
          No
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit Bet
      </button>
    </form>
  )
}

export default BetForm
