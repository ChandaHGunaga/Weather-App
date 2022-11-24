import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: any[];
}

const initialState: CounterState = {
  value: [],
};

export const weatherSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    weather: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
      localStorage.setItem("searchFromRedux",JSON.stringify(state.value))
    },
  },
});

export const { weather } = weatherSlice.actions;

export default weatherSlice;
