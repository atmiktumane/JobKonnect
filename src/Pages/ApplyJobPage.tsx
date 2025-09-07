import {
  Button,
  Divider,
  FileInput,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import {
  errorNotification,
  successNotification,
} from "../Components/services/NotificationService";
import { applyJobAPI, getJobByIDAPI } from "../Services/JobService";
import {
  convertToBase64Function,
  timeAgoFunction,
} from "../Components/services/Utilities";
import { isNotEmpty, useForm } from "@mantine/form";
import { useSelector } from "react-redux";

export const ApplyJobPage = () => {
  // State : to handle Preview Application
  const [preview, setPreview] = useState<boolean>(false);

  const [jobDetails, setJobDetails] = useState<any>(null);

  const { id } = useParams();

  // State : to handle navigation
  const navigate = useNavigate();

  // Get User Details from Redux
  const user = useSelector((state: any) => state.user);

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      resume: null,
      converLetter: "",
    },
    validate: {
      name: isNotEmpty("Name cannot be empty"),
      email: isNotEmpty("Email cannot be empty"),
      phone: isNotEmpty("Phone cannot be empty"),
      website: isNotEmpty("Website cannot be empty"),
      resume: isNotEmpty("Resume cannot be empty"),
    },
  });

  // Handle Preview Function
  const handlePreview = () => {
    form.validate();
    if (!form.isValid()) return;

    setPreview(!preview);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle Submit Function
  const handleSubmit = async () => {
    // Convert Resume File to Base64
    let resume: any = await convertToBase64Function(form.getValues().resume);

    // Modify Resume input value to Base64
    let applicant = {
      ...form.getValues(),
      applicantId: user.id,
      resume: resume.split(",")[1],
    };

    try {
      // API call
      await applyJobAPI(id, applicant);

      successNotification("Success", "Application Submitted Successfully");

      navigate("/job-history");
    } catch (error: any) {
      errorNotification("Failed to Apply Job", error.response);
    }
  };

  const getJobByIDFunction = async () => {
    try {
      const response = await getJobByIDAPI(id);

      setJobDetails(response);
    } catch (error: any) {
      errorNotification("Failed to fetch Job by ID", error.response?.data);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getJobByIDFunction();
  }, [id]);

  return (
    <>
      <div className="min-h-[90vh] bg-mine-shaft-950 p-6 font-['poppins']">
        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          leftSection={<FaArrowLeft />}
          variant="light"
          color="brightSun.4"
        >
          Back
        </Button>

        {/* Content */}
        <div className="w-3/4 place-self-center">
          {/* Row 1 - Job Detail */}
          <div className="flex items-center gap-3">
            {/* Company Image */}
            <div className="w-fit bg-mine-shaft-800 p-0.5 rounded-lg">
              <img
                src={`/Companies_Logo/${jobDetails?.company}.png`}
                alt="Company Logo"
                className="h-14 w-14"
              />
            </div>

            {/* Job Data */}
            <div>
              <h5 className="text-lg font-semibold">{jobDetails?.jobTitle}</h5>
              <p className="text-mine-shaft-300">
                {jobDetails?.company} &bull;{" "}
                {timeAgoFunction(jobDetails?.postTime)} &bull;{" "}
                {jobDetails?.applicants ? jobDetails?.applicants.length : 0}{" "}
                Applicants
              </p>
            </div>
          </div>

          <Divider size="xs" my="xl" />

          {/* Row 2 - Form */}
          <div className="flex flex-col gap-5 [&_input]:font-semibold [&_textarea]:font-semibold [&_.mantine-FileInput-input]:font-semibold">
            <h6 className="text-lg font-semibold">
              {preview ? "Preview : " : "Submit Your Application"}
            </h6>
            {/* Inputs Row 1 - Full Name + Email */}
            <div className="flex [&>*]:!w-1/2 gap-5">
              <TextInput
                {...form.getInputProps("name")}
                label="Full Name"
                withAsterisk
                placeholder="Enter Name"
                readOnly={preview}
                variant={preview ? "unstyled" : "default"}
              />

              <TextInput
                {...form.getInputProps("email")}
                label="Email"
                withAsterisk
                placeholder="Enter email"
                readOnly={preview}
                variant={preview ? "unstyled" : "default"}
              />
            </div>

            {/* Inputs Row 2 - Phone + Website */}
            <div className="flex [&>*]:!w-1/2 gap-5">
              <NumberInput
                {...form.getInputProps("phone")}
                label="Phone Number"
                withAsterisk
                placeholder="Enter Phone Number"
                hideControls
                min={0}
                max={9999999999}
                clampBehavior="strict"
                readOnly={preview}
                variant={preview ? "unstyled" : "default"}
              />

              <TextInput
                {...form.getInputProps("website")}
                label="Personal Website"
                withAsterisk
                placeholder="Enter URL"
                readOnly={preview}
                variant={preview ? "unstyled" : "default"}
              />
            </div>

            {/* Input Row 3 - Upload Resume */}
            <FileInput
              {...form.getInputProps("resume")}
              label="Attach your CV"
              withAsterisk
              placeholder="Your CV"
              leftSection={<GrAttachment />}
              accept="application/pdf"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
            />

            {/* Input Row 4 - Cover Letter */}
            <Textarea
              {...form.getInputProps("coverLetter")}
              label="Cover Letter"
              placeholder="Type something about yourself..."
              autosize
              minRows={4}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
            />

            {/* Buttons */}
            {/* Preview Button */}
            {!preview && (
              <Button
                onClick={handlePreview}
                variant="light"
                color="brightSun.4"
              >
                Preview
              </Button>
            )}

            {/* Edit + Submit Buttons */}
            <div
              className={`flex [&>*]:w-1/2 gap-5 ${
                preview ? "flex" : "hidden"
              }`}
            >
              <Button
                onClick={handlePreview}
                fullWidth
                variant="outline"
                color="brightSun.4"
              >
                Edit
              </Button>

              <Button
                onClick={handleSubmit}
                fullWidth
                variant="light"
                color="brightSun.4"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
