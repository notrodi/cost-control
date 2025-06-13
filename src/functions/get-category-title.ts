import { type Category, ExpenseCategory, IncomeCategory } from '../types';

export const CATEGORY_TITLES: Record<Category, string> = {
  // Категориии расходов
  [ExpenseCategory.Food]: 'Еда',
  [ExpenseCategory.Transport]: 'Транспорт',
  [ExpenseCategory.Car]: 'Автомобиль',
  [ExpenseCategory.Housing]: 'Жильё и коммунальные',
  [ExpenseCategory.Health]: 'Здоровье',
  [ExpenseCategory.Education]: 'Образование',
  [ExpenseCategory.Shopping]: 'Покупки',
  [ExpenseCategory.Leisure]: 'Развлечения',
  [ExpenseCategory.Travel]: 'Путешествия',
  [ExpenseCategory.Other]: 'Другое',

  // Категории доходов
  [IncomeCategory.Salary]: 'Зарплата',
  [IncomeCategory.Cashback]: 'Кешбэк, проценты по вкладам'
};

export function getCategoryTitle(category: Category): string {
  return CATEGORY_TITLES[category];
}
