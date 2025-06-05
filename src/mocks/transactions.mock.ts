import { Category, type Transaction } from '../types';

export const transactionsMock: Transaction[] = [
  {
    id: '0',
    category: Category.Products,
    description: 'Покупка продуктов в супермаркете',
    value: 2500.12,
    date: new Date('2024-11-01T18:15:00').toISOString()
  },
  {
    id: '1',
    category: Category.Transport,
    description: 'Билет на метро',
    value: 60.00,
    date: new Date('2024-11-03T08:05:00').toISOString()
  },
  {
    id: '2',
    category: Category.Car,
    description: 'Заправка бензином',
    value: 3200.8,
    date: new Date('2024-11-05T20:40:00').toISOString()
  },
  {
    id: '3',
    category: Category.Products,
    description: 'Кофе и булочка',
    value: 350,
    date: new Date('2024-11-06T10:25:00').toISOString()
  },
];
