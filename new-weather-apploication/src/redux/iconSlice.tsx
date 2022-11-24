import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: "`",
};

export const iconSlice = createSlice({
  name: "iconStatus",
  initialState,
  reducers: {
    showIcon: (state) => {
      state.value = "open";
    },
  },
});


export const { showIcon } = iconSlice.actions;

export default iconSlice;
