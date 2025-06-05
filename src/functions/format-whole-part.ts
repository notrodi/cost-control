export function formatWholePart(value: number): string {
  const isNegative = value < 0;
  const whole = Math.floor(Math.abs(value));
  const formatted = whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `'`);
  return isNegative ? `-${formatted}` : formatted;
}
