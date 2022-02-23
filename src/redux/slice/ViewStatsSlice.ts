import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as store from "../store";

// Define the initial state using that type
const initialState: api.ViewStats = {
  leftZone: true,
  upperZone: true,
  rightZone: true,
};

export const slice = createSlice({
  name: "ViewStats",
  initialState,
  reducers: {
    changeLeft: (state) => {
      state.leftZone = !state.leftZone;
    },
    changeMidUpper: (state) => {
      state.upperZone = !state.upperZone;
    },
    changeRight: (state) => {
      state.rightZone = !state.rightZone;
    },
  },
});

export const { changeLeft, changeMidUpper, changeRight } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectViewStatsLeftZone = (state: store.RootState) =>
  state.ViewStats.leftZone;
export const selectViewStatsUpperZone = (state: store.RootState) =>
  state.ViewStats.upperZone;
export const selectViewStatsRightZone = (state: store.RootState) =>
  state.ViewStats.rightZone;

export default slice.reducer;
