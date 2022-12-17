export function roundNumber(value: number, precision: number): number {
  if (precision === 0) {
    return Math.round(value);
  }
  return Math.round(value * (precision * 10)) / (precision * 10);
}
