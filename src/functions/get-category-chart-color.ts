import { type Category, ExpenseCategory, IncomeCategory } from '../types';

const INCOME_COLOR = '#2e7d32';

const CATEGORY_COLORS: Record<Category, string> = {
  // Категориии расходов
  [ExpenseCategory.Food]: '#e64a19',
  [ExpenseCategory.Transport]: '#0288d1',
  [ExpenseCategory.Car]: '#3949ab',
  [ExpenseCategory.Housing]: '#00897b',
  [ExpenseCategory.Health]: '#388e3c',
  [ExpenseCategory.Education]: '#fbc02d',
  [ExpenseCategory.Shopping]: '#8e24aa',
  [ExpenseCategory.Leisure]: '#d81b60',
  [ExpenseCategory.Travel]: '#6d4c41',
  [ExpenseCategory.Other]: '#757575',
  
    // Категории доходов
    [IncomeCategory.Salary]: INCOME_COLOR,
    [IncomeCategory.Cashback]: INCOME_COLOR
};

export function getCategoryChartColor(category: Category): string {
  return CATEGORY_COLORS[category];
}
