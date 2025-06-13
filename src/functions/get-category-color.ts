import { type Category, ExpenseCategory, IncomeCategory } from '../types';

const INCOME_COLOR = '#4caf50';

export const CATEGORY_UI_COLORS: Record<Category, string> = {
  // Категориии расходов
  [ExpenseCategory.Food]: '#ffccbc',
  [ExpenseCategory.Transport]: '#b3e5fc',
  [ExpenseCategory.Car]: '#c5cae9',
  [ExpenseCategory.Housing]: '#b2dfdb',
  [ExpenseCategory.Health]: '#c8e6c9',
  [ExpenseCategory.Education]: '#fff9c4',
  [ExpenseCategory.Shopping]: '#e1bee7',
  [ExpenseCategory.Leisure]: '#f8bbd0',
  [ExpenseCategory.Travel]: '#d7ccc8',
  [ExpenseCategory.Other]: '#eeeeee',

  // Категории доходов
  [IncomeCategory.Salary]: INCOME_COLOR,
  [IncomeCategory.Cashback]: INCOME_COLOR
};

export function getCategoryColor(category: Category): string {
  return CATEGORY_UI_COLORS[category];
}
