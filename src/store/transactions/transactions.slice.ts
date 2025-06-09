import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Transaction } from '../../types';
import { getAllTransactions, saveTransaction, deleteTransaction } from '../../utils/db';

export const loadTransactions = createAsyncThunk('transactions/load', async () => {
  return await getAllTransactions();
});

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: [] as Transaction[],
  reducers: {
    toggleTransaction: (state, { payload: transaction }) => {
      const index = state.findIndex(t => t.id === transaction.id);

      if (index !== -1) {
        state.splice(index, 1);
        deleteTransaction(transaction.id);
      } else {
        state.push(transaction);
        saveTransaction(transaction);
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(loadTransactions.fulfilled, (_state, action) => {
      return action.payload;
    });
  }
});

export const { toggleTransaction } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
