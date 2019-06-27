import React, { useState, useEffect } from 'react';
import './App.css';
import { BerlinClock } from './BerlinClock';
import { parseDate } from './clockEngine';

function startClock() {
  const today = new Date();
  const h = today.getHours();
  const m = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  const s = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
  return `${h}:${m}:${s}`;
}

function App() {
  const [ time, setTime ] = useState('');

  useEffect(() => {
    setInterval(() => {
      setTime(startClock());
    }, 1000);
  });

  const fromLocaleToBerlinFormat = parseDate(time);

  return (
    <div className="App w-100">
      <header className="App-header">
        <p>
          A simplified
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Mengenlehreuhr"
            target="_blank"
            rel="noopener noreferrer">
            {' '}Berlin Clock{' '}
          </a>
          implementation
        </p>
        <span
          className="App-link"
        >
        </span>
      </header>
      {time}
      <BerlinClock time={fromLocaleToBerlinFormat} />
    </div>
  );
}

export default App;
