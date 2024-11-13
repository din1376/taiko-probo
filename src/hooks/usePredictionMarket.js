import { useEffect, useState } from "react"
import { ethers } from "ethers"
import PredictionMarketABI from "../PredictionMarketABI.json"

export const usePredictionMarket = () => {
  const [contract, setContract] = useState(null)

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(
          process.env.REACT_APP_CONTRACT_ADDRESS,
          PredictionMarketABI,
          signer
        )
        setContract(contract)
      }
    }
    init()
  }, [])

  const fetchMarkets = async () => {
    // Fetch all markets logic here
  }

  const placeBet = async (marketId, betYes, amount) => {
    // Place bet logic here
  }

  const createMarket = async (description, endTime) => {
    // Create market logic here
  }

  const resolveMarket = async (marketId, outcome) => {
    // Resolve market logic here
  }

  return { fetchMarkets, placeBet, createMarket, resolveMarket }
}
