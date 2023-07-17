import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import getWinningNumbers from '../axiosRequests/getWinningNumbers'
import { WinningNumsProps } from '../interfaces/winningNums'

export default function Last20WinningNums({ 
  winningNumbers, setWinningNumbers 
}: WinningNumsProps) {

  const { data } = useQuery({
    queryKey: ['Winning Numbers'],
    queryFn: getWinningNumbers
  })

  useEffect(() => {
    if (data) setWinningNumbers(data.justTheArrays)
  }, [data, setWinningNumbers])

  return (
    <div className='winning-numbers-array'>
      <h2 className='title-secondary'>Numbers from Last 20 Winning Games</h2>
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
      <hr className='line winning-numbers-hr' />
    </div>
  )
}