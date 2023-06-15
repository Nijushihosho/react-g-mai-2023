import { render, screen } from '@testing-library/react';
import App from './App';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test("tester la présence du mot coucou dans App" , function(){
  render(<App />);
  const element = screen.getByText(/coucou/);
  expect(element).toBeInTheDocument();
})
