import type { Category } from './category';

export interface Transaction {
  id: string;
  category: Category,
  description: string,
  value: number,
  date: string
}
