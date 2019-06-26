import React from 'react';
import { BerlinClock } from './BerlinClock';
import { render } from '@testing-library/react';

describe('BerlinClock should', () => {
  test('render a yellow circle if second is even', () => {
    const { getByTestId, debug } = render(<BerlinClock time="Y" />);
  });
}); 
