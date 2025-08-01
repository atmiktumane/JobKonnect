import { Button } from "@mantine/core";
import { ExperienceInput } from "./ExperienceInput";
import { useState } from "react";
import { formatDate } from "../services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../services/NotificationService";

export const ExperienceCardProfile = (props: any) => {
  // State : for Edit Experience
  const [edit, setEdit] = useState<boolean>(false);

  const dispatch = useDispatch();

  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  // Function : to delete experience
  const handleDelete = () => {
    let exp = [...profile.experiences];
    exp.splice(props.index, 1);
    let updatedProfile = { ...profile, experiences: exp };

    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Experience Deleted successfully.");
  };

  return (
    <>
      {!edit ? (
        <div className="w-full flex flex-col gap-5">
          {/* Row 1 */}
          <div className="flex justify-between">
            {/* Left */}
            <div className="flex items-center gap-2">
              {/* Company Logo */}
              <div className="w-fit p-0.5 bg-mine-shaft-800 rounded-lg">
                <img
                  src={`/Companies_Logo/${props.company}.png`}
                  alt="Company Logo"
                  className="w-10"
                />
              </div>

              {/* Company Details */}
              <div>
                <h6 className="text-mine-shaft-100 font-medium">
                  {props.title}
                </h6>
                <p className="text-sm">
                  {props.company} &bull; {props.location}
                </p>
              </div>
            </div>

            {/* Right */}
            <p className="text-sm">
              {formatDate(props.startDate)} -{" "}
              {props.working ? "Present" : formatDate(props.endDate)}
            </p>
          </div>

          {/* Row 2 */}
          <p className="text-sm">{props.description}</p>

          {/* Row 3 (Conditional Rendering) - Edit + Delete Buttons */}
          {props.edit && (
            <div className="flex items-center gap-5">
              <Button
                onClick={() => setEdit(true)}
                variant="light"
                color="brightSun.4"
              >
                Edit
              </Button>

              <Button onClick={handleDelete} variant="light" color="red.8">
                Delete
              </Button>
            </div>
          )}
        </div>
      ) : (
        <ExperienceInput {...props} setEdit={setEdit} />
      )}
    </>
  );
};
