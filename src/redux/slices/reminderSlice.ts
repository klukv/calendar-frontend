import { createSlice } from "@reduxjs/toolkit";

type TAuthor = {
  id: number;
  username: string;
  email: string;
  roles: string[];
};

type TReminders = {
  id: number;
  text: string;
  yers: string;
  mounth: string;
  days: string;
  clock: string;
  minuts: string;
  author: TAuthor;
};

export interface ReminderState {
  reminders: TReminders[];
  changeReminders: boolean;
}

const initialState: ReminderState = {
  reminders: [],
  changeReminders: true,
};

export const reminderSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAllReminders: (state, action) => {
      state.reminders = action.payload;
    },
    setChangingReminders: (state, action) => {
      state.changeReminders = action.payload;
    },
  },
});

export const { setAllReminders, setChangingReminders } = reminderSlice.actions;

export default reminderSlice.reducer;
