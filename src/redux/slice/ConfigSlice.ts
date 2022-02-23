import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as store from "../store";
import isJsonString from "../../module/isJsonString";
import { invoke, InvokeArgs } from "@tauri-apps/api/tauri";

// Define the initial state using that type
const initialState: api.Config = {
  musicDataFolderPath: [],
};

export const slice = createSlice({
  name: "Config",
  initialState,
  reducers: {
    setWholeConfig: (state, action: PayloadAction<api.Config>) => {
      console.log(state);

      state.musicDataFolderPath = action.payload.musicDataFolderPath;
      console.log(state);
    },
    addMusicDataFolderPath: (state, action: PayloadAction<string>) => {
      state.musicDataFolderPath.push(action.payload);
      state.musicDataFolderPath = Array.from(
        new Set(state.musicDataFolderPath)
      );
    },
    deleteMusicDataFolderPath: (state, action: PayloadAction<string>) => {
      state.musicDataFolderPath = state.musicDataFolderPath.filter((value) => {
        return value !== action.payload;
      });
    },
  },
});

export const {
  setWholeConfig,
  addMusicDataFolderPath,
  deleteMusicDataFolderPath,
} = slice.actions;

export const fetchConfig = () => async (dispatch: store.AppDispatch) => {
  console.log("Hi!!!");

  const initialData = await invoke("get_lanch_config");
  if (isJsonString(initialData as string)) {
    dispatch(setWholeConfig(JSON.parse(initialData as string)));
  } else {
    dispatch(setWholeConfig(initialData as any));
  }
  console.log("did");
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMusicDataFolderPath = (state: store.RootState) =>
  state.Config.musicDataFolderPath;

export default slice.reducer;
