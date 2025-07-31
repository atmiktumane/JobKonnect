import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import { ExperienceCardProfile } from "./ExperienceCardProfile";
import { CertificateCardProfile } from "./CertificateCardProfile";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProfileByIdAPI } from "../services/ProfileService";
import { errorNotification } from "../services/NotificationService";
import { Info } from "./Info";
import { setProfile } from "../../Slices/ProfileSlice";
import { About } from "./About";

export const UserProfile = (props: any) => {
  // State : to edit 5 sections (User Details, About section, Skills, Experience, Certifications) present in Profile Page
  const [edit, setEdit] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  // State : for Skills tag
  const [skills, setSkills] = useState(props.skills.map((item: any) => item));

  // Get User info from Redux
  const user = useSelector((state: any) => state.user);

  // Get Profile info from Redux
  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  // Handle Edit Function : to handle edit of sections
  const handleEdit = (index: number) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  // GET Profile API Function
  const fetchProfileFunction = async () => {
    try {
      const response = await getProfileByIdAPI(user.profileId);

      // Update Redux state
      dispatch(setProfile(response));
    } catch (error: any) {
      errorNotification("Failed to fetch profile", error.response?.data);
    }
  };

  // Profile PageLoad workflow
  useEffect(() => {
    // ******* API Call *******
    fetchProfileFunction();
  }, []);

  return (
    <div className="w-3/4 flex flex-col gap-8 mx-auto py-10">
      {/* Row 1 - Profile Images */}
      <div className="relative">
        {/* Background Img */}
        <img
          src="/backgroundProfileImg.png"
          alt="BackgroundImage"
          className="h-36 w-full rounded-t-xl"
        />

        <img
          src="/profilePhoto.png"
          alt="Profile Photo"
          className="absolute -bottom-6 left-4 w-32 h-32 rounded-full border-4 border-mine-shaft-800"
        />
      </div>

      {/* Row 2 - User Details */}
      <Info />

      <Divider size="sm" />

      {/* Row 3 - About */}
      <About />

      <Divider size="sm" />

      {/* Row 4 - Skills */}
      <div className="flex flex-col gap-5">
        {/* row 1 - Title + Action Buttons */}
        <div className="flex justify-between">
          {/* Col 1 - Title */}
          <h4 className="text-xl font-semibold">Skills</h4>

          {/* Col 2 (Condition) - Edit + Save Button */}
          <ActionIcon
            onClick={() => handleEdit(2)}
            variant="light"
            aria-label="Settings"
          >
            {edit[2] ? (
              <FaRegSave className="w-5 h-5 text-bright-sun-400" />
            ) : (
              <MdOutlineModeEditOutline className="w-5 h-5 text-bright-sun-400" />
            )}
          </ActionIcon>
        </div>

        {/* row 2 (condition) - Edit + Preview Skills Tag */}
        {edit[2] ? (
          // Edit Skills
          <TagsInput
            value={profile?.skills}
            onChange={setSkills}
            placeholder="Enter Skills"
            splitChars={[",", "|"]}
          />
        ) : (
          // Preview Skills
          <div className="flex flex-wrap gap-2 text-xs">
            {profile?.skills?.map((skill: string, index: number) => (
              <div
                key={index}
                className="px-2 py-1 bg-bright-sun-400/15 text-bright-sun-400 font-medium rounded-full"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider size="sm" />

      {/* Row 5 - Experience */}
      <div>
        {/* row 1 - Title + Action Buttons */}
        <div className="flex justify-between">
          {/* Col 1 - Title */}
          <h4 className="text-xl font-semibold mb-5">Experience</h4>

          {/* Col 2 (Condition) - Edit + Save Button */}
          <ActionIcon
            onClick={() => handleEdit(3)}
            variant="light"
            aria-label="Settings"
          >
            {edit[3] ? (
              <FaRegSave className="w-5 h-5 text-bright-sun-400" />
            ) : (
              <MdOutlineModeEditOutline className="w-5 h-5 text-bright-sun-400" />
            )}
          </ActionIcon>
        </div>

        {/* row 2 (condition) - Edit + Preview Skills Tag */}
        <div className="flex flex-col gap-10">
          {profile?.experiences?.map((experience: any, index: number) => (
            <ExperienceCardProfile
              save={() => handleEdit(3)}
              key={index}
              {...experience}
              edit={edit[3]}
            />
          ))}
        </div>
      </div>

      <Divider size="sm" />

      {/* Row 6 - Certifications */}
      <div>
        <h4 className="text-xl font-semibold mb-5">Certifications</h4>

        <div className="flex flex-col gap-8">
          {profile?.certifications?.map((certification: any, index: number) => (
            <CertificateCardProfile key={index} {...certification} />
          ))}
        </div>
      </div>
    </div>
  );
};
