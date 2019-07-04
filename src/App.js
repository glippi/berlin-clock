import React, { useState, useEffect } from 'react'
import './App.css'
import { BerlinClock } from './BerlinClock'
import { StandardClock } from './StandardClock'
import { parseDate } from './clockEngine'
import { startClock } from './startClock'
import { BerlinClockTitle } from './BerlinClockTitle'

function App() {
  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      setTime(startClock(new Date()))
    }, 1000)
  })

  const fromLocaleToBerlinFormat = parseDate(time)

  return (
    <div
      className="w-100 h-100 bg-near-white"
      style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}
    >
      <BerlinClockTitle />

      <div style={{ display: 'grid', gridTemplateRows: '50% 50%' }}>
        <StandardClock time={time} />
        <BerlinClock time={fromLocaleToBerlinFormat} />
      </div>
    </div>
  )
}

export default App
