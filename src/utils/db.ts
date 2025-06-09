import { openDB } from 'idb';
import type { Transaction } from '../types';

export const DB_NAME = 'FinanceApp';
export const STORE_NAME = 'transactions';
export const BALANCE_STORE = 'balance';

export const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id' });
    }

    if (!db.objectStoreNames.contains(BALANCE_STORE)) {
      db.createObjectStore(BALANCE_STORE);
    }
  },
});

export async function saveTransaction(tx: Transaction) {
  const db = await dbPromise;
  await db.put(STORE_NAME, tx);
}

export async function deleteTransaction(id: string) {
  const db = await dbPromise;
  await db.delete(STORE_NAME, id);
}

export async function getAllTransactions(): Promise<Transaction[]> {
  const db = await dbPromise;
  return db.getAll(STORE_NAME);
}

export async function saveBalance(balance: number) {
  const db = await dbPromise;
  await db.put(BALANCE_STORE, balance, 'value');
}

export async function getBalance(): Promise<number> {
  const db = await dbPromise;
  return (await db.get(BALANCE_STORE, 'value')) ?? 0;
}
