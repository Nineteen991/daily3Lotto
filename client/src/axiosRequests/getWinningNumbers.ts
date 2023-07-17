import axios from 'axios'

import { WinningNums } from '../interfaces/winningNums'

const getWinningNumbers = async () => {
  const { data } = await axios.get<WinningNums>(
    `http://localhost:5000/api/v1/winning-numbers`
  )
  return data
}

export default getWinningNumbers