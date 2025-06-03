import type { Category, Transaction } from '../types';
import { getCategoryChartColor } from './get-category-chart-color';
import { getCategoryTitle } from './get-category-title';

export function getChartData(transactions: Transaction[]) {
  const result: Record<string, number> = {};

  transactions.forEach(({ category, value }) => {
    result[category] = (result[category] || 0) + value;
  });

  return Object.entries(result).map(([category, value]) => ({
    title: getCategoryTitle(category as Category),
    color: getCategoryChartColor(category as Category),
    value,
  }));
}