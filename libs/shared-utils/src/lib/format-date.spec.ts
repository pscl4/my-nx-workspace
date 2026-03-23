import { describe, it, expect } from 'vitest';
import { formatDate } from './format-date';

describe('formatDate', () => {
  it('formats a date to a readable string', () => {
    const date = new Date(2024, 0, 15); // Jan 15, 2024
    expect(formatDate(date)).toBe('January 15, 2024');
  });

  it('handles end-of-year dates', () => {
    const date = new Date(2024, 11, 31); // Dec 31, 2024
    expect(formatDate(date)).toBe('December 31, 2024');
  });
});