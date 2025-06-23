import { Notification } from "@mantine/core";
import { useSelector } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
import { FaCircleCheck } from "react-icons/fa6";
import type { RootState } from "../../ReduxStore/store";
// import { hideNotification } from "../../ReduxStore/notificationSlice";

export const NotificationModal = () => {
  const { show, message, title, color } = useSelector(
    (state: RootState) => state.notification
  );
  //   const dispatch = useDispatch();

  //   Hide after 5 seconds
  //   useEffect(() => {
  //     if (show) {
  //       const timer = setTimeout(() => {
  //         dispatch(hideNotification());
  //       }, 5000);
  //       return () => clearTimeout(timer);
  //     }
  //   }, [show, dispatch]);

  if (!show) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] [&_.mantine-Notification-root]:border-bright-sun-400">
      <Notification
        icon={<FaCircleCheck />}
        color={color}
        title={title}
        withCloseButton={false}
        withBorder
      >
        {message}
      </Notification>
    </div>
  );
};
