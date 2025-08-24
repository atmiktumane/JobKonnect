import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { fields } from "../../Data/PostJobData";
import { SelectInput } from "./SelectInput";
import { TextEditor } from "./TextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { content } from "../../Data/PostJobData";
import { postJobAPI } from "../../Services/JobService";
import {
  errorNotification,
  successNotification,
} from "../services/NotificationService";
import { useNavigate } from "react-router-dom";

export const PostJob = () => {
  const navigate = useNavigate();

  // Post Jobs Form Input (Initial Values)
  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      jobTitle: "",
      company: "",
      experience: "",
      jobType: "",
      location: "",
      packageOffered: "",
      skillsRequired: [],
      about: "",
      description: content,
    },
    validate: {
      jobTitle: isNotEmpty("Job Title is required"),
      company: isNotEmpty("Company is required"),
      experience: isNotEmpty("Experience is required"),
      jobType: isNotEmpty("Job TYpe is required"),
      location: isNotEmpty("Location is required"),
      packageOffered: isNotEmpty("Package Offered is required"),
      skillsRequired: isNotEmpty("Skills Required is required"),
      about: isNotEmpty("About is required"),
      description: isNotEmpty("Description is required"),
    },
  });

  const handlePost = async () => {
    form.validate();

    // Check Form Validation
    if (!form.isValid()) return;

    // POST Job API Function
    try {
      await postJobAPI(form.getValues());

      successNotification("Success", "Job Posted Successfully");

      navigate("/posted-job");
    } catch (error: any) {
      console.log("Error in Post Job : ", error);
      errorNotification("Failed to Post Job", error.response?.data);
    }
  };

  return (
    <div className="w-4/5">
      <h3 className="font-semibold text-2xl mb-5">Post a Job</h3>

      {/* Input Fields */}
      <div className="flex flex-col gap-5">
        {/* Row 1 */}
        <div className="flex gap-10 [&>*]:w-1/2 ">
          <SelectInput form={form} name="jobTitle" {...fields[0]} />
          <SelectInput form={form} name="company" {...fields[1]} />
        </div>

        {/* Row 2 */}
        <div className="flex gap-10 [&>*]:w-1/2 ">
          <SelectInput form={form} name="experience" {...fields[2]} />
          <SelectInput form={form} name="jobType" {...fields[3]} />
        </div>

        {/* Row 3 */}
        <div className="flex gap-10 [&>*]:w-1/2 ">
          <SelectInput form={form} name="location" {...fields[4]} />
          <NumberInput
            {...form.getInputProps("packageOffered")}
            withAsterisk
            label="Salary"
            min={1} // 1 LPA
            max={300} // 300 LPA
            clampBehavior="strict"
            hideControls
            placeholder="Enter Salary"
          />
        </div>

        {/* Row 4 */}
        <TagsInput
          {...form.getInputProps("skillsRequired")}
          label="Skills"
          withAsterisk
          placeholder="Enter Skill"
          clearable
          acceptValueOnBlur
          splitChars={[",", "|"]}
        />

        {/* Row 5 - About Job */}
        <Textarea
          {...form.getInputProps("about")}
          label="About Job"
          withAsterisk
          autosize
          minRows={4}
          placeholder="Enter about job..."
        />

        {/* Row 5 */}
        {/* Advance Tailwind CSS - Theme Color when Button clicked from Toolbar of Rich Text Editor */}
        <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
          <h5 className="text-sm font-medium">
            Job Description <span className="text-red-600">*</span>
          </h5>
          <TextEditor form={form} />
        </div>

        {/* Row 6 */}
        <div className="flex gap-4">
          <Button onClick={handlePost} color="brightSun.4" variant="light">
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
