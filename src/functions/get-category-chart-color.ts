import { Category } from '../types';

const CATEGORY_COLORS: Record<Category, string> = {
  [Category.Products]: '#a3d8f4',
  [Category.Transport]: '#8fd9b6',
  [Category.Car]: '#f9b5a7'
};

export function getCategoryChartColor(category: Category): string {
  return CATEGORY_COLORS[category];
}