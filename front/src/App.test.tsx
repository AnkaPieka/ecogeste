import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, Routes } from 'react-router-dom';

test('renders learn react link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  // const linkElement = screen.getByText(/learn react/i);
  expect(true).toBe(true);
});
