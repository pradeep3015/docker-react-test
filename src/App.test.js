import { render, screen } from '@testing-library/react';
import App from './App';

test('render learn react link',()=>{
  const {getByText} = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render learn react link',()=>{
  const {getByText} = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
