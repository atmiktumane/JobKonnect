// utils/showCountdownNotification.ts
// import { AppDispatch } from "@/store/store";
import type { AppDispatch } from "../../ReduxStore/store";
import {
  showNotification,
  updateNotificationMessage,
  hideNotification,
} from "../../ReduxStore/notificationSlice";
import { hideLoader } from "../../ReduxStore/loaderSlice";

export const ShowCountdownNotification = (
  dispatch: AppDispatch,
  seconds: number,
  messagePrefix: string,
  callback?: () => void
) => {
  let count = seconds;

  dispatch(
    showNotification({
      title: "Redirecting...",
      message: `${messagePrefix} in ${count} seconds...`,
      color: "blue",
    })
  );

  const interval = setInterval(() => {
    count--;

    if (count > 0) {
      dispatch(
        updateNotificationMessage(`${messagePrefix} in ${count} seconds...`)
      );
    } else {
      clearInterval(interval);
      dispatch(hideNotification());
      dispatch(hideLoader());
      if (callback) callback();
    }
  }, 1000);
};
