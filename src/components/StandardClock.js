import React from 'react'

export function StandardClock({ time }) {
  return (
    <div
      data-testid="standard-clock"
      className="f2"
      style={{
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      {time}
    </div>
  )
}
