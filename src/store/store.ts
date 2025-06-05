import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactions/transactions.slice';
import { balanceReducer } from './balance/balance.slice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    balance: balanceReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;