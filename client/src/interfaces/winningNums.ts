export interface WinningNums {
  justTheArrays: number[][]
}

export interface WinningProps {
  winningNumbers: number[][]
}

export interface WinningNumsProps extends WinningProps {
  setWinningNumbers: React.Dispatch<React.SetStateAction<number[][]>>
}