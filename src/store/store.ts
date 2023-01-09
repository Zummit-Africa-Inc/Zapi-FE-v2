import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import auth from "./slices/auth";
import apiReducer from "./slices/api";

export const store = configureStore({
  reducer: {
    auth,
    apis: apiReducer,
  },
  devTools: import.meta.env.VITE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;
