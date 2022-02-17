import { configureStore } from "@reduxjs/toolkit";
import ViewStatsReducer from "./slice/ViewStatsSlice";
import SelectedFolderStatsReducer from "./slice/SelectedFolderStatsSlice";

export const store = configureStore({
  reducer: {
    ViewStats: ViewStatsReducer,
    SelectedFolderStats: SelectedFolderStatsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
