import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioDetail from '.';

test('renders learn react link', () => {
  render(<PortfolioDetail/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
