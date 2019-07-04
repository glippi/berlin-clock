import React from 'react'
import { Seconds } from './Seconds'
import { Hours } from './Hours'
import { Minutes } from './Minutes'

export function BerlinClock({ time }) {
  const [firstRow, secondRow, thirdRow, fourthRow, lastRow] = time
  const seconds = firstRow
  const hours = [secondRow, thirdRow]
  const minutes = [fourthRow, lastRow]

  return (
    <div
      data-testid="berlin-clock"
      className="flex flex-column justify-center items-center mv4"
    >
      <Seconds seconds={seconds} />
      <Hours hours={hours} />
      <Minutes minutes={minutes} />
    </div>
  )
}
