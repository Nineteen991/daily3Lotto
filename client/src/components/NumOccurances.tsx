import { useEffect, useState } from 'react'
import { countBy } from 'lodash'

import { WinningProps } from '../interfaces/winningNums'

export default function NumOccurances({ winningNumbers }: WinningProps) {
  const [mostCommonNums, setMostCommonNums] = useState({})

  useEffect(() => {
    const flatArr = winningNumbers.flat()
    const occurances = countBy(flatArr)
    setMostCommonNums(occurances)
  }, [winningNumbers])

  return (
    <div className='num-occurances'>
      <h2 className='title-secondary'>
        Number of Occurences of Each Number in the Last 20 Draws
      </h2>
      
      <table className='occurances-table'>
        <thead className='table-head'>
          <tr className='table-row'>
            <th className='table-header'>Ball Number</th>
            <th className='table-header'># of Occurances</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          {
            Object.keys(mostCommonNums).map((num, index) => {
              const i = Object.values(mostCommonNums)[index] as number
              return (
                <tr 
                  className={`table-row ${index % 2 === 0 ? 'even' : 'odd'}`} 
                  key={ index }
                >
                  <td className='table-data'>{ num }</td>
                  <td 
                    className={`table-data ${ i >= 7 ? 'freq' : ''}`}
                  >
                    { i }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}