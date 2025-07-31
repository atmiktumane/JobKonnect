import { ActionIcon } from "@mantine/core";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SelectInputProfile } from "./SelectInputProfile";
import { fields } from "../../Data/ProfileData";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../services/NotificationService";

export const Info = () => {
  const [edit, setEdit] = useState<boolean>(false);

  // Get User info from Redux
  const user = useSelector((state: any) => state.user);

  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  const form = useForm({
    mode: "controlled",
    initialValues: { jobTitle: "", company: "", location: "" },
  });

  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({
        jobTitle: profile.jobTitle,
        company: profile.company,
        location: profile.location,
      });
    } else {
      setEdit(false);
      //   console.log("Form Valeus : ", form.getValues());

      let updatedProfile = { ...profile, ...form.getValues() };
      //   console.log("Form Valeus : ", updatedProfile);

      // Redux - update profile api
      dispatch(changeProfile(updatedProfile));

      // Show Success Notification
      successNotification("Success", "Profile updated successfully.");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* row 1 */}
        <div className="flex justify-between">
          {/* Col 1 - Title */}
          <h4 className="text-xl font-semibold">{user.name}</h4>

          {/* Col 2 (Condition) - Edit + Save Button */}
          <ActionIcon
            onClick={handleClick}
            variant="light"
            aria-label="Settings"
          >
            {edit ? (
              <FaRegSave className="w-5 h-5 text-bright-sun-400" />
            ) : (
              <MdOutlineModeEditOutline className="w-5 h-5 text-bright-sun-400" />
            )}
          </ActionIcon>
        </div>

        {/* row 2 : Edit + Preview Details */}
        {edit ? (
          // Edit User Details - Input Fields
          <div className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="flex gap-10 [&>*]:w-1/2 ">
              <SelectInputProfile form={form} name="jobTitle" {...fields[0]} />
              <SelectInputProfile form={form} name="company" {...fields[1]} />
            </div>
            {/* Row 2 */}
            <SelectInputProfile form={form} name="location" {...fields[2]} />
          </div>
        ) : (
          // Show User Details
          <div>
            <div className="flex items-center gap-1.5 font-medium">
              <IoBriefcaseOutline /> {profile.jobTitle} &bull; {profile.company}
            </div>
            <div className="flex items-center gap-1.5 text-md text-mine-shaft-300">
              <GrLocation /> {profile.location}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
