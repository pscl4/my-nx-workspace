import { describe, it, expect } from 'vitest';
import { calculateDiscount } from './discount';

describe('calculateDiscount', () => {
  it('applies a 20% discount', () => {
    expect(calculateDiscount(100, 20)).toBe(80);
  });

  it('applies a 0% discount (no change)', () => {
    expect(calculateDiscount(49.99, 0)).toBe(49.99);
  });

  it('applies a 100% discount (free)', () => {
    expect(calculateDiscount(99, 100)).toBe(0);
  });

  it('throws for an out-of-range discount', () => {
    expect(() => calculateDiscount(100, 110)).toThrow(RangeError);
  });
});