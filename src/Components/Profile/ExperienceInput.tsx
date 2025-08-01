import { Button, Checkbox, Textarea } from "@mantine/core";
import { fields } from "../../Data/ProfileData";
import { SelectInputProfile } from "./SelectInputProfile";
import { useEffect } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../services/NotificationService";

export const ExperienceInput = (props: any) => {
  // Dropdown options for Input Box
  const select = fields;

  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      working: false,
    },
    validate: {
      title: isNotEmpty("Title is required"),
      company: isNotEmpty("Company is required"),
      location: isNotEmpty("Location is required"),
      description: isNotEmpty("Description is required"),
    },
  });

  const handleSave = () => {
    // validate Mantine Form
    form.validate();

    // Form is invalid then return
    if (!form.isValid()) return;

    let exp = [...profile.experiences];

    if (props.add) {
      exp.push(form.getValues());

      let startDate = new Date(`${exp[exp.length - 1].startDate}`); // convert string into Date
      exp[exp.length - 1].startDate = startDate.toISOString(); // convert date into ISOString

      let endDate = new Date(`${exp[exp.length - 1].endDate}`); // convert string into Date
      exp[exp.length - 1].endDate = endDate.toISOString();
    } else {
      exp[props.index] = form.getValues();

      let startDate = new Date(`${exp[props.index].startDate}`); // Convert Start date into Date type
      exp[props.index].startDate = startDate.toISOString(); // convert date into ISOString

      let endDate = new Date(`${exp[props.index].endDate}`); // Convert Start date into Date type
      exp[props.index].endDate = endDate.toISOString();
    }

    let updatedProfile = { ...profile, experiences: exp };
    // Redux - update profile api
    dispatch(changeProfile(updatedProfile));

    // Show Success Notification
    successNotification(
      "Success",
      `Experience ${props.add ? "Added" : "Updated"} successfully.`
    );
    props.setEdit(false);
  };

  useEffect(() => {
    if (!props.add)
      form.setValues({
        title: props.title,
        company: props.company,
        location: props.location,
        description: props.description,
        startDate: new Date(props.startDate),
        endDate: new Date(props.endDate),
        working: props.working,
      });
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <h6 className="text-md text-bright-sun-400 font-semibold">
        {props.add ? "Add" : "Edit"} Experience
      </h6>

      {/* // Edit User Details - Input Fields */}
      <div className="flex flex-col gap-3">
        {/* Row 1 - Job Title + Company */}
        <div className="flex gap-5 [&>*]:w-1/2">
          <SelectInputProfile form={form} name="title" {...select[0]} />
          <SelectInputProfile form={form} name="company" {...select[1]} />
        </div>

        {/* Row 2 - Location */}
        <SelectInputProfile form={form} name="location" {...select[2]} />

        {/* Row 3 - Summary */}
        <Textarea
          {...form.getInputProps("description")}
          label="Summary"
          withAsterisk
          autosize
          minRows={4}
          placeholder="Enter summary"
        />

        {/* Row 4 - Start Date + End Date */}
        <div className="flex gap-5 [&>*]:w-1/2">
          {/* Start Date */}
          <MonthPickerInput
            {...form.getInputProps("startDate")}
            label="Start Date"
            withAsterisk
            placeholder="Pick date"
            maxDate={form.getValues().endDate || undefined}
          />

          {/* End Date */}
          <MonthPickerInput
            {...form.getInputProps("endDate")}
            label="End Date"
            withAsterisk
            placeholder="Pick date"
            minDate={form.getValues().startDate || undefined}
            maxDate={new Date()}
            disabled={form.getValues().working}
          />
        </div>

        {/* Row 5 - Checkbox : Currently Working here */}
        <Checkbox
          // {...form.getInputProps("working")}
          checked={form.getValues().working}
          onChange={(e) =>
            form.setFieldValue("working", e.currentTarget.checked)
          }
          autoContrast
          label="Currently working here"
        />

        {/* Row 6 - Save + Cancel Button */}
        <div className="flex items-center gap-5">
          <Button onClick={handleSave} variant="light" color="green.8">
            Save
          </Button>

          <Button
            onClick={() => props.setEdit(false)}
            variant="light"
            color="red.8"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
