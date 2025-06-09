import { Category } from '../types';

const CATEGORY_COLORS: Record<Category, string> = {
  [Category.Food]: '#e64a19',
  [Category.Transport]: '#0288d1',
  [Category.Car]: '#3949ab',
  [Category.Housing]: '#00897b',
  [Category.Health]: '#388e3c',
  [Category.Education]: '#fbc02d',
  [Category.Shopping]: '#8e24aa',
  [Category.Leisure]: '#d81b60',
  [Category.Travel]: '#6d4c41',
  [Category.Other]: '#757575'
};

export function getCategoryChartColor(category: Category): string {
  return CATEGORY_COLORS[category];
}
