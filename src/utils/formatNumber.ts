export function formatNumber(value: number): string {
  if (value < 1000) {
    return String(value);
  }
  if (value < 100000) {
    return String(Math.floor(value / 100) / 10) + 'k';
  }

  return String(Math.floor(value / 100000) / 10) + 'm';
}
