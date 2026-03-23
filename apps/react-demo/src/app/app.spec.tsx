import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App (react-demo)', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('shows today\'s formatted date from shared-utils formatDate', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // The component renders "Today is: <date>" — check the prefix is present
    expect(screen.getByText(/Today is:/)).toBeTruthy();
  });
});
