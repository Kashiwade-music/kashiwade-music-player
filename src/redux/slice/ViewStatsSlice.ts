import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as store from "../store";

// Define the initial state using that type
const initialState: api.ViewStats = {
  left: true,
  midUpper: true,
  right: true,
};

export const slice = createSlice({
  name: "ViewStats",
  initialState,
  reducers: {
    changeLeft: (state) => {
      state.left = !state.left;
    },
    changeMidUpper: (state) => {
      state.midUpper = !state.midUpper;
    },
    changeRight: (state) => {
      state.right = !state.right;
    },
  },
});

export const { changeLeft, changeMidUpper, changeRight } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectViewStatsLeft = (state: store.RootState) =>
  state.ViewStats.left;
export const selectViewStatsMidUpper = (state: store.RootState) =>
  state.ViewStats.midUpper;
export const selectViewStatsRight = (state: store.RootState) =>
  state.ViewStats.right;

export default slice.reducer;
