import { Category, type Transaction } from '../types';

export const transactionsMock: Transaction[] = [
  {
    category: Category.Products,
    description: 'Покупка продуктов в супермаркете',
    value: 2500,
  },
  {
    category: Category.Transport,
    description: 'Билет на метро',
    value: 60,
  },
  {
    category: Category.Car,
    description: 'Заправка бензином',
    value: 3200,
  },
  {
    category: Category.Products,
    description: 'Кофе и булочка',
    value: 350,
  },
];
