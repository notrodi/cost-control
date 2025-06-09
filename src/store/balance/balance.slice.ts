import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBalance, saveBalance } from '../../utils/db';

export const loadBalance = createAsyncThunk('balance/load', async () => {
  return await getBalance();
});

const initialState = 0;

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (_state, { payload }) => {
      saveBalance(payload);
      return payload;
    },
    decrementBalance: (state, { payload }) => {
      const updated = state - payload;
      saveBalance(updated);
      return updated;
    },
    incrementBalance: (state, { payload }) => {
      const updated = state + payload;
      saveBalance(updated);
      return updated;
    }
  },
  extraReducers: builder => {
    builder.addCase(loadBalance.fulfilled, (_state, action) => {
      return action.payload;
    });
  }
});

export const { setBalance, decrementBalance, incrementBalance } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;
