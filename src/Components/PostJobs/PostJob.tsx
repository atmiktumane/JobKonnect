import { Button, TagsInput } from "@mantine/core";
import { fields } from "../../Data/PostJobData";
import { SelectInput } from "./SelectInput";
import { TextEditor } from "./TextEditor";

export const PostJob = () => {
  return (
    <div className="w-4/5">
      <h3 className="font-semibold text-2xl mb-5">Post a Job</h3>

      {/* Input Fields */}
      <div className="flex flex-col gap-5">
        {/* Row 1 */}
        <div className="flex gap-10 [&>*]:w-1/2 ">
          <SelectInput {...fields[0]} />
          <SelectInput {...fields[1]} />
        </div>

        {/* Row 2 */}
        <div className="flex gap-10 [&>*]:w-1/2 ">
          <SelectInput {...fields[2]} />
          <SelectInput {...fields[3]} />
        </div>

        {/* Row 3 */}
        <div className="flex gap-10 [&>*]:w-1/2 ">
          <SelectInput {...fields[4]} />
          <SelectInput {...fields[5]} />
        </div>

        {/* Row 4 */}
        <TagsInput
          label="Skills"
          placeholder="Enter Skill"
          clearable
          acceptValueOnBlur
          splitChars={[",", "|"]}
        />

        {/* Row 5 */}
        {/* Advance Tailwind CSS - Theme Color when Button clicked from Toolbar of Rich Text Editor */}
        <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
          <h5 className="text-sm font-medium">Job Description</h5>
          <TextEditor />
        </div>

        {/* Row 6 */}
        <div className="flex gap-4">
          <Button color="brightSun.4" variant="light">
            Publish Job
          </Button>
          <Button color="brightSun.4" variant="outline">
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};
