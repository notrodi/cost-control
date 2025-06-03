import { formatCents } from './format-cents';
import { formatWholePart } from './format-whole-part';

export function formatMoney(value: number): string {
  const whole = formatWholePart(value);
  const cents = formatCents(value);
  return `${whole}.${cents}`;
}