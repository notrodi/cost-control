import type { ExpenseCategory, TransactionType } from '.';

export interface Transaction {
  id: string;
  type: TransactionType;
  category: ExpenseCategory,
  description: string,
  value: number,
  date: string
}
