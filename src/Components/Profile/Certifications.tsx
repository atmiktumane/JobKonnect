import { useSelector } from "react-redux";
import { CertificateCardProfile } from "./CertificateCardProfile";
import { ActionIcon } from "@mantine/core";
import { FaPlus } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useState } from "react";
import { CertificateInput } from "./CertificateInput";

export const Certifications = () => {
  // State : to add Certificate
  const [addCert, setAddCert] = useState<boolean>(false);

  // State : to edit "Certificates" section
  const [edit, setEdit] = useState<boolean>(false);

  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  const handleClick = () => {
    setEdit(!edit);
  };

  return (
    <div>
      {/* row 1 - Title + Action Buttons */}
      <div className="flex justify-between items-start">
        {/* Col 1 - Title */}
        <h4 className="text-xl font-semibold mb-5">Certifications</h4>

        {/* Col 2 - Add Experience Button */}
        <div className="flex items-center gap-2">
          <ActionIcon
            onClick={() => setAddCert(true)}
            variant="light"
            aria-label="Settings"
          >
            <FaPlus className="w-4 h-4 text-bright-sun-400" />
          </ActionIcon>

          {/* Col 3 (Condition) - Edit + Save Button */}
          <div className="flex items-center gap-2">
            {/* Edit or Cancel button */}
            <ActionIcon
              onClick={handleClick}
              variant="light"
              color={edit ? "red.6" : ""}
            >
              {edit ? (
                <CgClose className="w-5 h-5 text-red-500" />
              ) : (
                <MdOutlineModeEditOutline className="w-5 h-5 text-bright-sun-400" />
              )}
            </ActionIcon>
          </div>
        </div>
      </div>

      {/* row 2 (condition) - Add + Edit + Delete Certificates */}
      <div className="flex flex-col gap-8">
        {addCert && <CertificateInput add setEdit={setAddCert} />}

        {profile?.certifications?.map((cert: any, index: number) => (
          <CertificateCardProfile
            key={index}
            index={index}
            edit={edit}
            {...cert}
          />
        ))}
      </div>
    </div>
  );
};
