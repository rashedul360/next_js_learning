import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
 count: number;
}
const initialState: CounterState = {
 count: 0,
};
const counterSlice = createSlice({
 name: "count",
 initialState,
 reducers: {
  increment: (state, action) => {
   state.count++;
  },
  decrement: (state, action) => {
   state.count--;
  },
 },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
