export function formatWholePart(value: number): string {
  const whole = Math.floor(value);
  return whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `'`);
}