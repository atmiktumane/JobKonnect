import {
  Button,
  Divider,
  FileInput,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { Link } from "react-router-dom";

export const ApplyJobPage = () => {
  // State : to handle Preview Application
  const [preview, setPreview] = useState<boolean>(false);

  // State : to handle Submit Application
  const [submit, setSubmit] = useState<boolean>(false);

  // Handle Preview Function
  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle Submit Function
  const handleSubmit = () => {
    // Show Loader and Notification Modal
    // Redirect to "Find Jobs" Page in 5 seconds
  };

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 p-6 font-['poppins']">
      {/* Back Button */}
      <Link to="/job-desc" className="inline-block my-4">
        <Button
          leftSection={<FaArrowLeft />}
          variant="light"
          color="brightSun.4"
        >
          Back
        </Button>
      </Link>

      {/* Content */}
      <div className="w-3/4 place-self-center">
        {/* Row 1 - Job Detail */}
        <div className="flex items-center gap-3">
          {/* Company Image */}
          <div className="w-fit bg-mine-shaft-800 p-0.5 rounded-lg">
            <img
              src="/Companies_Logo/Google.png"
              alt="Company Logo"
              className="h-14 w-14"
            />
          </div>

          {/* Job Data */}
          <div>
            <h5 className="text-lg font-semibold">Software Engineer III</h5>
            <p className="text-mine-shaft-300">
              Google &bull; 3 days ago &bull; 48 Applicants
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
              label="Full Name"
              withAsterisk
              placeholder="Enter Name"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
            />

            <TextInput
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
              label="Personal Website"
              withAsterisk
              placeholder="Enter URL"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
            />
          </div>

          {/* Input Row 3 - Upload Resume */}
          <FileInput
            label="Attach your CV"
            withAsterisk
            placeholder="Your CV"
            leftSection={<GrAttachment />}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
          />

          {/* Input Row 4 - Cover Letter */}
          <Textarea
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
            <Button onClick={handlePreview} variant="light" color="brightSun.4">
              Preview
            </Button>
          )}

          {/* Edit + Submit Buttons */}
          <div
            className={`flex [&>*]:w-1/2 gap-5 ${preview ? "flex" : "hidden"}`}
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
  );
};
