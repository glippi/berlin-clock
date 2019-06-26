import React from 'react';

export function Seconds({ seconds }) {
    const secondsColor = seconds === 'Y' ? 'bg-yellow' : 'bg-dark-gray';

    return (
      <div data-testid="seconds" className={`w3 h3 br-100 ${secondsColor}`} />
    )
}
