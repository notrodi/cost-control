import { Category } from '../types';

const CATEGORY_TITLES = {
  [Category.Products]: 'Еда и продукты',
  [Category.Transport]: 'Общественный транспорт',
  [Category.Car]: 'Автомобиль',
}

export function getCategoryTitle(category: Category) {
  return CATEGORY_TITLES[category];
}
