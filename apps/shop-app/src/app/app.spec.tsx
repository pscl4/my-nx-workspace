import { render, screen } from '@testing-library/react';

import App from './app';

describe('App (shop-app)', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('shows the sale end date using shared-utils formatDate', () => {
    render(<App />);
    expect(screen.getByText(/Sale ends:/)).toBeTruthy();
  });

  it('shows discounted prices using shared-utils calculateDiscount', () => {
    render(<App />);
    // 15% off $999.99 = $849.99
    expect(screen.getByText(/849\.99/)).toBeTruthy();
    // 15% off $149.99 = $127.49
    expect(screen.getByText(/127\.49/)).toBeTruthy();
  });
});
