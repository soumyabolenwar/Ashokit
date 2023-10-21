import React from 'react';
import { render, screen } from '@testing-library/react';
import Training from '.';

test('renders learn react link', () => {
  render(<Training />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
