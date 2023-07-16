import { Request, Response } from "express"

import Lotto from "../models/Lotto"
import autoDeleteOverLength20 from "../utils/autoDelete"
import { 
  latestNumbersString, 
  getNumbers 
} from "../interfaces/controller.interfaces"

const setWinningNumbers = async (req: Request, res: Response) => {
  const { latestNums } = req.body as latestNumbersString
  const strArray = latestNums.split('')
  const numArray = strArray.map(x => Number(x))
  const setArray = await Lotto.create({ winnngNumbers: numArray })

  // I only want to keep the most recent 20 draws
  const winningNumbers: getNumbers[] = await Lotto.find({})
  if (winningNumbers.length >= 21) {
    autoDeleteOverLength20(winningNumbers)
  }

  res.status(200).json({ setArray })
}

const getWinningNumbers = async (req: Request, res: Response) => {
  const winningNumbers: getNumbers[] = await Lotto.find({})
  const justTheArrays: number[][] = []
  winningNumbers.map(arr => justTheArrays.push(arr.winnngNumbers))

  // I want the most recent draw first
  justTheArrays.reverse()
  res.status(200).json({ justTheArrays })
}

const deleteWinningNumbers = async (req: Request, res: Response) => {
  const { id } = req.body as latestNumbersString
  const result = await Lotto.deleteOne({ _id: id })
  if (!result.acknowledged) throw new Error(`Didn't delete id: ${ id }`)
  res.status(200).json({ msg: `Deleted id: ${ id }`})
}

export { setWinningNumbers, getWinningNumbers, deleteWinningNumbers }