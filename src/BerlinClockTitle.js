import React from 'react'

export function BerlinClockTitle() {
  return (
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
        telling the time to the world by means of coloured fields
      </h2>
      <time className="f6 ttu tracked gray i">since 17 june 1975</time>
    </header>
  )
}
