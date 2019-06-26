import React from 'react';
import { Seconds } from './Seconds';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Seconds should', () => {
  test('render a yellow circle if second is even', () => {
    const { getByTestId } = render(<Seconds seconds="Y" />);
    const secondsComponent = getByTestId("seconds")
    const secondsComponentColorIsYellow = secondsComponent.className.includes("bg-yellow");

    expect(secondsComponentColorIsYellow).toBeTruthy();
  });

  test('render a dark-gray circle if second is even', () => {
    const { getByTestId } = render(<Seconds seconds="O" />);
    const secondsComponent = getByTestId("seconds");
    const secondsComponentColorIsDarkGray = secondsComponent.className.includes("bg-dark-gray");

    expect(secondsComponentColorIsDarkGray).toBeTruthy();
  });
}); 
