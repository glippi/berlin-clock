import React from 'react'

export function StandardClock({ time }) {
  return (
    <div
      data-testid="standard-clock"
      style={{
        fontFamily: 'Orbitron, sans-serif',
        alignSelf: 'center',
        justifySelf: 'center',
        fontSize: '3.5rem',
      }}
    >
      {time}
    </div>
  )
}
