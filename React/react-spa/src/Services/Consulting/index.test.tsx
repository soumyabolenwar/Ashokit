import React from 'react';
import { render, screen } from '@testing-library/react';
import Consulting from '.';

test('renders learn react link', () => {
  render(<Consulting />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
