import { createSlice } from '@reduxjs/toolkit';
import type { Transaction } from '../../types';
import { transactionsMock } from '../../mocks';

const initialState: Transaction[] = transactionsMock;

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    toggleTransaction: (state, { payload: transaction }) => {
      console.log(transaction);
      const exists = state.some(t => t.id === transaction.id);

      if (exists) {
        return state.filter(t => t.id !== transaction.id);
      } else {
        state.push(transaction);
      }
    }
  }
})

export const { toggleTransaction } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;