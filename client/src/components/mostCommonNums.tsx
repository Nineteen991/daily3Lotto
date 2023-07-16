import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { WinningNums } from '../interfaces/winningNums'

export default function MostCommonNums() {
  const [winningNumbers, setWinningNumbers] = useState([[1,2,3]])
  const getWinningNumbers = async () => {
    const { data } = await axios.get<WinningNums>(`http://localhost:5000/api/v1/winning-numbers`)
      // .then(res => setWinningNumbers(res.data.justTheArrays))
    return data
  }

  const { data } = useQuery({
    queryKey: ['Winning Numbers'],
    queryFn: getWinningNumbers
  })

  useEffect(() => {
    if (data) setWinningNumbers(data.justTheArrays)
  }, [data])

  return (
    <div className='winning-numbers-array'>
      {
        winningNumbers.map((arr, index) => (
          <p className='winning-numbers' key={index}>
            { arr.map((nums, i) => (
              <span key={i+100}>
                { i !== 2 ? `${nums}, ` : `${nums}` }
              </span>
            )) }
          </p>
        ))
      }
    </div>
  )
}