import React from 'react';
import { render, screen } from '@testing-library/react';
import Development from '.';

test('renders learn react link', () => {
  render(<Development />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
