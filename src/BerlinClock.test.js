import React from 'react';
import { BerlinClock } from './BerlinClock';
import { render } from '@testing-library/react';

describe('BerlinClock should', () => {
  test('render seconds, hours and minutes', () => {
    const { getByTestId } = render(<BerlinClock time={["Y","ROOO","ROOO","OOOOOOOOOOO","OOOO"]} />);

    const seconds = getByTestId("seconds");
    const hours = getByTestId("hours");
    const minutes = getByTestId("minutes")

    expect(seconds).toBeTruthy();
    expect(hours).toBeTruthy();
    expect(minutes).toBeTruthy();
  });
});
