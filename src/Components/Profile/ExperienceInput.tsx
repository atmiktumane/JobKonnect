import { Button, Checkbox, Textarea } from "@mantine/core";
import { fields } from "../../Data/ProfileData";
import { SelectInputProfile } from "./SelectInputProfile";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

export const ExperienceInput = (props: any) => {
  // State : for Description
  const [desc, setDesc] = useState<string>(props.parentDesc);

  // State : for Start Date
  const [startDate, setStartDate] = useState<string | null>(null);

  // State : for End Date
  const [endDate, setEndDate] = useState<string | null>(null);

  // State : for Currently working checkbox
  const [isPresentlyWorking, setIsPresentlyWorking] = useState<boolean>(false);

  //   Profile Data
  const select = fields;

  const onSaveExperience = () => {
    props.close();
    props.save();
  };
  return (
    <div className="flex flex-col gap-5">
      <h6 className="text-md text-bright-sun-400 font-semibold">
        Edit Experience
      </h6>

      {/* // Edit User Details - Input Fields */}
      <div className="flex flex-col gap-3">
        {/* Row 1 - Job Title + Company */}
        <div className="flex gap-5 [&>*]:w-1/2">
          <SelectInputProfile {...select[0]} />
          <SelectInputProfile {...select[1]} />
        </div>

        {/* Row 2 - Location */}
        <SelectInputProfile {...select[2]} />

        {/* Row 3 - Summary */}
        <Textarea
          label="Summary"
          withAsterisk
          autosize
          minRows={4}
          placeholder="Enter summary"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        {/* Row 4 - Start Date + End Date */}
        <div className="flex gap-5 [&>*]:w-1/2">
          {/* Start Date */}
          <MonthPickerInput
            label="Start Date"
            withAsterisk
            placeholder="Pick date"
            maxDate={endDate || undefined}
            value={startDate}
            onChange={setStartDate}
          />

          {/* End Date */}
          <MonthPickerInput
            label="End Date"
            withAsterisk
            placeholder="Pick date"
            minDate={startDate || undefined}
            maxDate={new Date()}
            value={endDate}
            onChange={setEndDate}
            disabled={isPresentlyWorking}
          />
        </div>

        {/* Row 5 - Checkbox : Currently Working here */}
        <Checkbox
          autoContrast
          defaultChecked={isPresentlyWorking}
          label="Currently working here"
          onChange={() => setIsPresentlyWorking(!isPresentlyWorking)}
        />

        {/* Row 6 - Save + Cancel Button */}
        <div className="flex items-center gap-5">
          <Button
            onClick={onSaveExperience}
            variant="light"
            color="brightSun.4"
          >
            Save
          </Button>

          <Button onClick={props.close} variant="outline" color="mineShaft.2">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
