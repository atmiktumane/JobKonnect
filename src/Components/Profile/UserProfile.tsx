import { Divider } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileByIdAPI } from "../services/ProfileService";
import { errorNotification } from "../services/NotificationService";
import { Info } from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experiences } from "./Experiences";
import { Certifications } from "./Certifications";

export const UserProfile = () => {
  // Get User info from Redux
  const user = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  // GET Profile API Function
  const fetchProfileFunction = async () => {
    try {
      const response = await getProfileByIdAPI(user.profileId);

      // Update Redux state
      dispatch(setProfile(response));
    } catch (error: any) {
      errorNotification("Failed to fetch profile", error.response?.data);
    }
  };

  // Profile PageLoad workflow
  useEffect(() => {
    // ******* API Call *******
    fetchProfileFunction();
  }, []);

  return (
    <div className="w-3/4 flex flex-col gap-8 mx-auto py-10">
      {/* Row 1 - Profile Images */}
      <div className="relative">
        {/* Background Img */}
        <img
          src="/backgroundProfileImg.png"
          alt="BackgroundImage"
          className="h-36 w-full rounded-t-xl"
        />

        <img
          src="/profilePhoto.png"
          alt="Profile Photo"
          className="absolute -bottom-6 left-4 w-32 h-32 rounded-full border-4 border-mine-shaft-800"
        />
      </div>

      {/* Row 2 - User Details */}
      <Info />

      <Divider size="sm" />

      {/* Row 3 - About */}
      <About />

      <Divider size="sm" />

      {/* Row 4 - Skills */}
      <Skills />

      <Divider size="sm" />

      {/* Row 5 - Experience */}
      <Experiences />

      <Divider size="sm" />

      {/* Row 6 - Certifications */}
      <Certifications />
    </div>
  );
};
