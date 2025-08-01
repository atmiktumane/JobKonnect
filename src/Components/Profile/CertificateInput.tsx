import { Button, TextInput } from "@mantine/core";
import { SelectInputProfile } from "./SelectInputProfile";
import { fields } from "../../Data/ProfileData";
import { isNotEmpty, useForm } from "@mantine/form";
import { MonthPickerInput } from "@mantine/dates";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../services/NotificationService";

export const CertificateInput = (props: any) => {
  // Dropdown options for Input Box
  const select = fields;

  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      name: "",
      company: "",
      issueDate: new Date(),
      certificateId: "",
    },
    validate: {
      name: isNotEmpty("Name is required"),
      company: isNotEmpty("Company is required"),
      certificateId: isNotEmpty("Certificate ID is required"),
    },
  });

  const handleSave = () => {
    // validate Mantine Form
    form.validate();

    // Form is invalid then return
    if (!form.isValid()) return;

    let cert = [...profile.certifications];

    if (props.add) {
      cert.push(form.getValues());

      let issueDate = new Date(`${cert[cert.length - 1].issueDate}`);
      cert[cert.length - 1].issueDate = issueDate.toISOString();
    } else {
      cert[props.index] = form.getValues();

      let issueDate = new Date(`${cert[props.index].issueDate}`);
      cert[props.index].issueDate = issueDate.toISOString();
    }

    let updatedProfile = { ...profile, certifications: cert };

    // Redux - update profile api
    dispatch(changeProfile(updatedProfile));

    // Show Success Notification
    successNotification(
      "Success",
      `Certification ${props.add ? "Added" : "Updated"} successfully.`
    );

    props.setEdit(false);
  };

  useEffect(() => {
    if (!props.add) {
      form.setValues({
        name: props.name,
        company: props.company,
        issueDate: new Date(props.issueDate),
        certificateId: props.certificateId,
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <h6 className="text-md text-bright-sun-400 font-semibold">
        {props.add ? "Add" : "Edit"} Certificate
      </h6>

      <div className="flex flex-col gap-3">
        <div className="flex gap-5 [&>*]:w-1/2">
          <TextInput
            {...form.getInputProps("name")}
            label="Certificate Name"
            withAsterisk
            placeholder="Enter Name"
          />
          <SelectInputProfile form={form} name="company" {...select[1]} />
        </div>

        <div className="flex gap-5 [&>*]:w-1/2">
          <TextInput
            {...form.getInputProps("certificateId")}
            label="Certificate ID"
            withAsterisk
            placeholder="Enter ID"
          />
          <MonthPickerInput
            {...form.getInputProps("issueDate")}
            label="Issued Date"
            withAsterisk
            placeholder="Pick date"
            maxDate={new Date() || undefined}
          />
        </div>

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
