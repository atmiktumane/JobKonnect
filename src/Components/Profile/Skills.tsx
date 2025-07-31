import { ActionIcon, TagsInput } from "@mantine/core";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../services/NotificationService";
import { CgClose } from "react-icons/cg";

export const Skills = () => {
  // State : to manage skills data
  const [skills, setSkills] = useState<string[]>([]);

  // State : to edit "Skills" section
  const [edit, setEdit] = useState<boolean>(false);

  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  // redux hook : Updates Redux state
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      setSkills(profile.skills);
    } else {
      setEdit(false);
      //   console.log("Form Valeus : ", form.getValues());
    }
  };

  // Handle Save : to save about data in DB through redux
  const handleSave = () => {
    let updatedProfile = { ...profile, skills: skills };

    // Redux - update profile api
    dispatch(changeProfile(updatedProfile));

    // Show Success Notification
    successNotification("Success", "Skills section updated successfully.");

    setEdit(false);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* row 1 - Title + Action Buttons */}
      <div className="flex justify-between">
        {/* Col 1 - Title */}
        <h4 className="text-xl font-semibold">Skills</h4>

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

      {/* row 2 (condition) - Edit + Preview Skills Tag */}
      {edit ? (
        // Edit Skills
        <TagsInput
          value={skills}
          onChange={setSkills}
          placeholder="Enter Skills"
          splitChars={[",", "|"]}
        />
      ) : (
        // Preview Skills
        <div className="flex flex-wrap gap-2 text-xs">
          {profile?.skills?.map((skill: string, index: number) => (
            <div
              key={index}
              className="px-2 py-1 bg-bright-sun-400/15 text-bright-sun-400 font-medium rounded-full"
            >
              {skill}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
