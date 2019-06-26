import React, { Component } from 'react';
import { Seconds } from './Seconds';

export function BerlinClock({ time }) {
  const seconds = time[0];

  return (
    <div data-testid="berlin-clock" className="flex flex-row justify-center items-center">
      <Seconds seconds={seconds} />
      </div>
    )
  }
