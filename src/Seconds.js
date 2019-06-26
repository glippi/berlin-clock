import React from 'react';

export function Seconds({ seconds }) {
    return (
      <div data-testid="seconds" className={`w3 h3 br-100 ${seconds === 'Y' ? 'bg-yellow' : 'bg-dark-gray'}`} />
    )
}
