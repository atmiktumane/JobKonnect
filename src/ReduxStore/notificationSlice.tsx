// store/notificationSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  show: boolean;
  message: string;
  title?: string;
  color?: "teal" | "red" | "blue" | "yellow";
}

const initialState: NotificationState = {
  show: false,
  message: "",
  title: "",
  color: "teal",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<{
        message: string;
        title?: string;
        color?: NotificationState["color"];
      }>
    ) => {
      state.show = true;
      state.message = action.payload.message;
      state.title = action.payload.title || "Notice";
      state.color = action.payload.color || "teal";
    },
    updateNotificationMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    hideNotification: (state) => {
      state.show = false;
      state.message = "";
      state.title = "";
    },
  },
});

export const { showNotification, hideNotification, updateNotificationMessage } =
  notificationSlice.actions;

export default notificationSlice.reducer;
