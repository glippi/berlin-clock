import React from 'react';

export function Hours({ hours }) {
  const hourColor = hour => hour === 'R' ? "bg-red" : "bg-dark-gray";

  return (
    <div data-testid="hours" className="w5">
      {hours.map((hour, i) => (
        <div key={i} className="flex flex-row justify-center items-center w5">
          {hour && hour.split('').map((h, idx) => (
            <div key={idx} className={`h3 ba pa2 ${hourColor(h)}`} style={{ width: 'calc(100% / 4)'}} />
          ))}
        </div>
      ))}
    </div>
  )
}