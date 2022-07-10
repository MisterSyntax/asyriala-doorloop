import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/The Tremendous Typing Test/i);
  expect(title).toBeInTheDocument();

});

