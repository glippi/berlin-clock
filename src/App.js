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
    <main>
      <header className="pa3">
        <h1>
          The
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Mengenlehreuhr"
            target="_blank"
            rel="noopener noreferrer">
            {' '}Berlin Clock{' '}
          </a>
        </h1>
      </header>

      <section className="flex flex-row justify-around items-center">
        {time}
        <BerlinClock time={fromLocaleToBerlinFormat} />
      </section>

    </main>
  );
}

export default App;
