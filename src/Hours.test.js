import React from 'react';
import { Hours } from './Hours';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Hours should', () => {
  test('render a red rectangle, three gray rectangles, a red rectangle and three gray rectangles', () => {
    const { container } = render(<Hours hours={["ROOO", "ROOO"]} />);

    expect(container.firstChild.firstChild).toMatchSnapshot();
  });
});
