import { Request, Response } from "express"

import Lotto from "../models/Lotto"
import { latestNumbersString, getNumbers } from "../interfaces/latestNums"

const autoDeleteOverLength20 = async (winningNumbers: getNumbers[]) => {
  const oldestNumbers = winningNumbers[0]._id
  const nixedNumbers = await Lotto.deleteOne({ _id: oldestNumbers })
  console.log(nixedNumbers)
}

const setWinningNumbers = async (req: Request, res: Response) => {
  const { latestNums } = req.body as latestNumbersString
  const strArray = latestNums.split('')
  const numArray = strArray.map(x => Number(x))
  const setArray = await Lotto.create({ winnngNumbers: numArray })
  res.status(200).json({ setArray })
}

const getWinningNumbers = async (req: Request, res: Response) => {
  const winningNumbers: getNumbers[] = await Lotto.find({})
  console.log(winningNumbers)
  const justTheArrays: number[][] = []
  winningNumbers.map(arr => justTheArrays.push(arr.winningNumbers))
console.log(justTheArrays.length)
  if (justTheArrays.length >= 21) {
    // justTheArrays.shift()
    console.log(justTheArrays.length)
    autoDeleteOverLength20(winningNumbers)
  }
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