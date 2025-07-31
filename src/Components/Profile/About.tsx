import { ActionIcon, Textarea } from "@mantine/core";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../services/NotificationService";

export const About = () => {
  // State : to manage "About" data
  const [about, setAbout] = useState<string>("");

  // State : to edit "About" section
  const [edit, setEdit] = useState<boolean>(false);

  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  // Redux Hook : Updates Redux state
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      setAbout(profile.about);
    } else {
      setEdit(false);
    }
  };

  // Handle Save : to save about data in DB through redux
  const handleSave = () => {
    let updatedProfile = { ...profile, about: about };

    // Redux - update profile api
    dispatch(changeProfile(updatedProfile));

    // Show Success Notification
    successNotification("Success", "Profile updated successfully.");

    setEdit(false);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Title + Action Buttons */}
      <div className="flex justify-between">
        {/* Col 1 - Title */}
        <h4 className="text-xl font-semibold">About</h4>

        {/* Col 2 (Condition) - Edit + Save Button */}
        <div className="flex items-center gap-2">
          {/* Save Button */}
          {edit && (
            <ActionIcon onClick={handleSave} variant="light" color="green.6">
              <FaCheck className="w-4 h-4 text-green-400" />
            </ActionIcon>
          )}

          {/* Edit or Cancel Button */}
          <ActionIcon
            onClick={handleClick}
            variant="light"
            color={edit ? "red.6" : ""}
          >
            {edit ? (
              <CgClose className="w-5 h-5 text-red-500" />
            ) : (
              <MdOutlineModeEditOutline className="w-5 h-5 text-bright-sun-400" />
            )}
          </ActionIcon>
        </div>
      </div>

      {/* Content (Condition) : Edit + Show About Section */}
      {edit ? (
        <Textarea
          autosize
          minRows={4}
          placeholder="Enter about yourself..."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      ) : (
        <p className="text-sm">{profile?.about}</p>
      )}
    </div>
  );
};
