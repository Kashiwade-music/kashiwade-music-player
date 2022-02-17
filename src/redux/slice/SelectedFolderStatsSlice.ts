import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as store from "../store";

// Define the initial state using that type
const initialState: api.SelectedFolderStats = {
  shouldShowDirPathInMidMain: "",
  openingDirInTree: [],
};

export const slice = createSlice({
  name: "ViewStats",
  initialState,
  reducers: {
    changeShouldShowDirPathInMidMain: (
      state,
      action: PayloadAction<string>
    ) => {
      state.shouldShowDirPathInMidMain = action.payload;
    },
    addOpeningDirInTree(state, action: PayloadAction<string>) {
      state.openingDirInTree.push(action.payload);
      state.openingDirInTree = Array.from(new Set(state.openingDirInTree));
    },
    deleteOpeningDirInTree(state, action: PayloadAction<string>) {
      state.openingDirInTree = state.openingDirInTree.filter((value) => {
        return value !== action.payload;
      });
    },
  },
});

export const {
  changeShouldShowDirPathInMidMain,
  addOpeningDirInTree,
  deleteOpeningDirInTree,
} = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectShouldShowDirPathInMidMain = (state: store.RootState) =>
  state.SelectedFolderStats.shouldShowDirPathInMidMain;
export const selectOpeningDirInTree = (state: store.RootState) =>
  state.SelectedFolderStats.openingDirInTree;

export default slice.reducer;
