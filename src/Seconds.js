import React from 'react'

export function Seconds({ seconds }) {
  const secondsColor = seconds === 'Y' ? 'bg-yellow' : 'bg-silver'

  return (
    <div data-testid="seconds" className={`w3 h3 ba br-100 ${secondsColor}`} />
  )
}
