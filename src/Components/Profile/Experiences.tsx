import { ActionIcon } from "@mantine/core";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { ExperienceCardProfile } from "./ExperienceCardProfile";
import { CgClose } from "react-icons/cg";
import { ExperienceInput } from "./ExperienceInput";

export const Experiences = () => {
  // State : to add Experience
  const [addExp, setAddExp] = useState<boolean>(false);

  // State : to edit "Experiences" section
  const [edit, setEdit] = useState<boolean>(false);

  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  const handleClick = () => {
    setEdit(!edit);
  };

  return (
    <div>
      {/* row 1 - Title + Action Buttons */}
      <div className="flex justify-between items-start">
        {/* Col 1 - Title */}
        <h4 className="text-xl font-semibold mb-5">Experience</h4>

        {/* Col 2 - Add Experience Button */}
        <div className="flex items-center gap-2">
          <ActionIcon
            onClick={() => setAddExp(true)}
            variant="light"
            aria-label="Settings"
          >
            <FaPlus className="w-4 h-4 text-bright-sun-400" />
          </ActionIcon>

          {/* Col 3 (Condition) - Edit + Save Button */}
          <div className="flex items-center gap-2">
            {/* Edit or Cancel button */}
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
      </div>

      {/* row 2 (condition) - Edit + Preview Skills Tag */}
      <div className="flex flex-col gap-10">
        {addExp && <ExperienceInput add setEdit={setAddExp} />}

        {profile?.experiences?.map((exp: any, index: number) => (
          <ExperienceCardProfile
            key={index}
            index={index}
            edit={edit}
            {...exp}
          />
        ))}
      </div>
    </div>
  );
};
