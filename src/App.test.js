import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('should render without crashing', () => {
  const div = document.createElement("div");
  render(<App />, div);
});

test('should render h1', () => {
  const { getByText } = render(<App />)
  const text = getByText('Hello World');
  expect(text).toBeInTheDocument();
})

