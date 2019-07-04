import React, { useState, useEffect } from 'react'
import './App.css'
import { BerlinClock } from './BerlinClock'
import { StandardClock } from './StandardClock'
import { parseDate } from './clockEngine'

function startClock() {
  const today = new Date()
  const h = today.getHours()
  const m =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()
  const s =
    today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds()
  return `${h}:${m}:${s}`
}

function App() {
  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      setTime(startClock())
    }, 1000)
  })

  const fromLocaleToBerlinFormat = parseDate(time)

  return (
    <div
      className="w-100 h-100 bg-near-white"
      style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}
    >
      <header
        className="ph3 ph5-ns pv5"
        style={{ alignSelf: 'center', justifySelf: 'center' }}
      >
        <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
          <a
            className="link dim black"
            href="https://en.wikipedia.org/wiki/Mengenlehreuhr"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            The Berlin Clock{' '}
          </a>
        </h1>
        <h2 className="f3 mid-gray lh-title">
          telling the time to the world by means of illuminated, coloured fields
        </h2>
        <time className="f6 ttu tracked gray">since 17 june 1975</time>
      </header>

      <div
        className="flex flex-column items-center"
        style={{ display: 'grid', gridTemplateRows: '50% 50%' }}
      >
        <StandardClock time={time} />
        <BerlinClock time={fromLocaleToBerlinFormat} />
      </div>
    </div>
  )
}

export default App
