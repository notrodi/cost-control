import { createSlice } from '@reduxjs/toolkit';

const initialState: number = 10000;

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (_state, { payload: balance }) => {
      return balance;
    },
    decrementBalance(state, { payload: value }) {
      return state - value;
    }
  }
});

export const { setBalance, decrementBalance } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;
