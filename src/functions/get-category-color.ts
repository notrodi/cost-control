import { Category } from '../types';

export const CATEGORY_UI_COLORS: Record<Category, string> = {
  [Category.Food]: '#ffccbc',
  [Category.Transport]: '#b3e5fc',
  [Category.Car]: '#c5cae9',
  [Category.Housing]: '#b2dfdb',
  [Category.Health]: '#c8e6c9',
  [Category.Education]: '#fff9c4',
  [Category.Shopping]: '#e1bee7',
  [Category.Leisure]: '#f8bbd0',
  [Category.Travel]: '#d7ccc8',
  [Category.Other]: '#eeeeee'
};

export function getCategoryColor(category: Category): string {
  return CATEGORY_UI_COLORS[category];
}
