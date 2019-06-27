import React from 'react';

export function Minutes({ minutes }) {
  const minuteColor = minute => minute === 'Y' ? "bg-yellow" : "bg-dark-gray";

  return (
    <div data-testid="minutes">
      {minutes.map((minute, i) => (
        <div key={i} className="flex flex-row w5">
          {minute && minute.split('').map((m, idx) => (
            <div key={idx} className={`h3 ba pa2 ${minuteColor(m)}`} style={{ width: i === 0 ? 'calc(100% / 11)' : 'calc(100% / 4)'}} />
          ))}
        </div>
      ))}
    </div>
  )
}
