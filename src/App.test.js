import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App should', () => {
  test('render BerlinClock', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('berlin-clock')).toBeTruthy();
  });

  test('render StandardClock', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('standard-clock')).toBeTruthy();
  });
});
