import React, { useState, useEffect } from 'react'
import { BerlinClockTitle } from './BerlinClockTitle'
import { BerlinClock } from './BerlinClock'
import { StandardClock } from './StandardClock'
import { parseDate } from '../lib/clockEngine'
import { startClock } from '../lib/startClock'

function App() {
  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      setTime(startClock(new Date()))
    }, 1000)
  })

  const fromLocaleToBerlinFormat = parseDate(time)

  return (
    <div className="w-100 h-100 flex flex-column items-center bg-near-white">
      <BerlinClockTitle />

      <div className="flex flex-column items-center">
        <BerlinClock time={fromLocaleToBerlinFormat} />
        <StandardClock time={time} />
      </div>
    </div>
  )
}

export default App
