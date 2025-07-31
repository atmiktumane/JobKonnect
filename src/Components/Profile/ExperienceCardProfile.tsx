import { Button } from "@mantine/core";
import { ExperienceInput } from "./ExperienceInput";
import { useState } from "react";
import { formatDate } from "../services/Utilities";

export const ExperienceCardProfile = (props: any) => {
  // State : for Edit Experience
  const [editExp, setEditExp] = useState<boolean>(false);

  return (
    <>
      {!editExp && (
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
              {formatDate(props.startDate)} - {formatDate(props.endDate)}
            </p>
          </div>

          {/* Row 2 */}
          <p className="text-sm">{props.description}</p>

          {/* Row 3 (Conditional Rendering) - Edit + Delete Buttons */}
          {props.edit && (
            <div className="flex items-center gap-5">
              <Button
                onClick={() => setEditExp(true)}
                variant="outline"
                color="brightSun.4"
              >
                Edit
              </Button>

              <Button variant="light" color="red.8">
                Delete
              </Button>
            </div>
          )}
        </div>
      )}

      {/* (Conditional Rendering) */}
      {editExp && (
        <ExperienceInput
          save={props.save}
          close={() => setEditExp(false)}
          parentDesc={props.description}
          parentStartDate={props.startDate}
          parentEndDate={props.endDate}
        />
      )}
    </>
  );
};
