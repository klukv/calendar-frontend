import userSlice from "./slices/userSlice";
import reminderSlice from "./slices/reminderSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { userSlice, reminderSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
