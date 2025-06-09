import { Category } from '../types';

export const CATEGORY_TITLES: Record<Category, string> = {
  [Category.Food]: 'Еда',
  [Category.Transport]: 'Транспорт',
  [Category.Car]: 'Автомобиль',
  [Category.Housing]: 'Жильё и коммунальные',
  [Category.Health]: 'Здоровье',
  [Category.Education]: 'Образование',
  [Category.Shopping]: 'Покупки',
  [Category.Leisure]: 'Развлечения',
  [Category.Travel]: 'Путешествия',
  [Category.Other]: 'Другое'
};

export function getCategoryTitle(category: Category): string {
  return CATEGORY_TITLES[category];
}
