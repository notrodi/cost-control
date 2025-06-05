import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './transactions/transactions.slice';

export const store = configureStore({
  reducer: {
    transactions: reducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;