import { Category } from '../types';

const CATEGORY_COLORS: Record<Category, string> = {
  [Category.Products]: '#d7eefc',
  [Category.Transport]: '#d4ebd6',
  [Category.Car]: '#fbe6e3'
};

export function getCategoryColor(category: Category): string {
  return CATEGORY_COLORS[category];
}