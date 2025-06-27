import { Button, Divider } from "@mantine/core";
import { GrLocation } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { ProfileExperienceCard } from "./ProfileExperienceCard";
import { ProfileCertificationCard } from "./ProfileCertificationCard";

export const UserProfile = (props: any) => {
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
      <div className="flex justify-between">
        {/* Col 1 */}
        <div>
          <h4 className="text-xl font-semibold">{props.name}</h4>

          <div className="flex items-center gap-1.5 font-medium">
            <IoBriefcaseOutline /> {props.role} &bull; {props.company}
          </div>

          <div className="flex items-center gap-1.5 text-md text-mine-shaft-300">
            <GrLocation /> {props.location}
          </div>
        </div>

        {/* Col 2 */}
        <Button variant="light" color="brightSun.4">
          Message
        </Button>
      </div>

      <Divider size="sm" />

      {/* Row 3 - About */}
      <div>
        <h4 className="text-xl font-semibold">About</h4>
        <p className="text-sm mt-5">{props.about}</p>
      </div>

      <Divider size="sm" />

      {/* Row 4 - Skills */}
      <div>
        <h4 className="text-xl font-semibold">Skills</h4>

        {/* Skills Card */}
        <div className="flex flex-wrap gap-2 mt-5 text-xs">
          {props.skills.map((skill: string, index: number) => (
            <div
              key={index}
              className="px-2 py-1 bg-bright-sun-400/15 text-bright-sun-400 font-medium rounded-full"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Divider size="sm" />

      {/* Row 5 - Experience */}
      <div>
        <h4 className="text-xl font-semibold mb-5">Experience</h4>

        <div className="flex flex-col gap-8">
          {props.experiences.map((experience: any, index: number) => (
            <ProfileExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>

      <Divider size="sm" />

      {/* Row 6 - Certifications */}
      <div>
        <h4 className="text-xl font-semibold mb-5">Certifications</h4>

        <div className="flex flex-col gap-8">
          {props.certifications.map((certification: any, index: number) => (
            <ProfileCertificationCard key={index} {...certification} />
          ))}
        </div>
      </div>
    </div>
  );
};
