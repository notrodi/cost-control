export function formatCents(value: number): string {
  return (value % 1).toFixed(2).slice(2);
}