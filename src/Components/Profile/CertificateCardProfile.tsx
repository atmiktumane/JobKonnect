import { useState } from "react";
import { formatDate } from "../services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { CertificateInput } from "./CertificateInput";
import { Button } from "@mantine/core";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../services/NotificationService";

export const CertificateCardProfile = (props: any) => {
  // State : for Edit Certificate
  const [edit, setEdit] = useState<boolean>(false);

  const dispatch = useDispatch();

  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  // Function : to delete certificate
  const handleDelete = () => {
    let cert = [...profile.certifications];
    cert.splice(props.index, 1);

    let updatedProfile = { ...profile, certifications: cert };

    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Certification Deleted successfully.");
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
                  {props.name}
                </h6>
                <p className="text-sm">{props.company}</p>
              </div>
            </div>

            {/* Right */}
            <div className="text-sm text-end">
              <p>Issued: {formatDate(props.issueDate)}</p>
              <p>ID: {props.certificateId}</p>
            </div>
          </div>

          {/* Row 2 (Conditional Rendering) - Edit + Delete Buttons */}
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
        <CertificateInput {...props} setEdit={setEdit} />
      )}
    </>
  );
};
