export function formatCents(value: number): string {
  const absCents = Math.abs(value % 1);
  return absCents.toFixed(2).slice(2);
}