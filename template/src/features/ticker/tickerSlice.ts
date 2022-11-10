import { createSlice } from "@reduxjs/toolkit";

type TTickerState = {
  ticker: number;
};

const initialState: TTickerState = {
  ticker: 0,
};

export const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    tick: (state) => {
      state.ticker += 1;
    },
  },
});

export const { tick } = tickerSlice.actions;

export default tickerSlice.reducer;
