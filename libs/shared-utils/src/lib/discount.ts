/**
 * Calculates the discounted price given a percentage off.
 * Used ONLY by shop-app — changing this should NOT affect react-demo.
 */
export function calculateDiscount(price: number, discountPercent: number): number {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new RangeError('discountPercent must be between 0 and 100');
  }
  return Math.round(price * (1 - discountPercent / 100) * 100) / 100;
}