import { Avatar, Divider, FileInput, Overlay } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../services/NotificationService";
import { Info } from "./Info";
import { changeProfile } from "../../Slices/ProfileSlice";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experiences } from "./Experiences";
import { Certifications } from "./Certifications";
import { useHover } from "@mantine/hooks";
import { RiImageEditFill } from "react-icons/ri";
import { convertToBase64Function } from "../services/Utilities";

export const UserProfile = () => {
  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  // Mantine Hook
  const { hovered, ref } = useHover();

  // handle : Image file change
  const handleFileChange = async (image: any) => {
    let picture: any = await convertToBase64Function(image);
    // console.log("Base 64 Picture : ", picture);

    let updatedProfile = { ...profile, image: picture.split(",")[1] };

    // Redux - update profile api
    dispatch(changeProfile(updatedProfile));

    // Show Success Notification
    successNotification("Success", "Profile Image updated successfully.");
  };

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

        <div
          ref={ref}
          className="absolute flex items-center justify-center -bottom-6 left-4"
        >
          <Avatar
            src={
              profile.image
                ? `data:image/jpeg;base64,${profile.image}`
                : "/profilePhoto.png"
            }
            alt="Profile Photo"
            className="!w-32 !h-32 rounded-full border-4 border-mine-shaft-800"
          />

          {hovered && (
            <Overlay
              className="!rounded-full absolute"
              color="#000"
              backgroundOpacity={0.65}
            />
          )}

          {hovered && (
            <RiImageEditFill className="absolute z-[300] !w-12 !h-12" />
          )}

          {hovered && (
            <FileInput
              className="absolute h-full w-full [&_*]:!h-full [&_*]:!rounded-full z-[301]"
              variant="transparent"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
            />
          )}
        </div>
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
