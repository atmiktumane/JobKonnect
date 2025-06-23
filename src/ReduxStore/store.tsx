// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";
import notificationReducer from "./notificationSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
