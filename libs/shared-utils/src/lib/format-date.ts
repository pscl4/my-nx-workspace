/**
 * Formats a Date object into a human-readable string.
 * Used by BOTH react-demo and shop-app.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}