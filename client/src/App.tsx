import { useState } from 'react'

import Header from './components/header'
import Last20WinningNums from './components/last20WinningNums'
import NumOccurances from './components/NumOccurances'
import './App.sass'

export default function App() {
  const [winningNumbers, setWinningNumbers] = useState([[1,2,3]])

  return (
    <div className='container'>
      <Header />
      <div className='contains-2-divs'>
        <Last20WinningNums
          winningNumbers={ winningNumbers }
          setWinningNumbers={ setWinningNumbers }
        />
        <NumOccurances winningNumbers={ winningNumbers } />
      </div>
    </div>
  )
}