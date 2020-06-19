import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  //console.log(getByTest());
  const linkElement = getByText(/Hacker News/i);
  console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
});
