import type { Category } from './category';

export interface Transaction {
  category: Category,
  description: string,
  value: number,
  date: Date
}
