import React from 'react';
import { render, screen } from '@testing-library/react';
import Todos from '.';

test('renders learn react link', () => {
  render(<Todos />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
