import { Button, Divider } from "@mantine/core";
import { GrLocation } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { ExperienceCard } from "./ExperienceCard";
import { CertificationCard } from "./CertificationCard";
import { talents } from "../../Data/TalentsData";
import { TalentCard } from "../FindTalents/TalentCard";

export const Profile = (props: any) => {
  return (
    <div className="w-full flex gap-5">
      {/* Left - Detailed Content */}
      <div className="w-2/3 flex flex-col gap-8">
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
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>

        <Divider size="sm" />

        {/* Row 6 - Certifications */}
        <div>
          <h4 className="text-xl font-semibold mb-5">Certifications</h4>

          <div className="flex flex-col gap-8">
            {props.certifications.map((certification: any, index: number) => (
              <CertificationCard key={index} {...certification} />
            ))}
          </div>
        </div>
      </div>

      {/* Right - Recommendations */}
      <div className="w-1/3">
        {/* Title */}
        <h4 className="text-lg font-semibold mb-5">Recommended Talents</h4>

        {/* Cards : Show only 4 cards */}
        <div className="flex flex-col gap-5">
          {talents.map(
            (talent, index) =>
              // 4 Cards
              index < 4 && <TalentCard key={index} {...talent} />
          )}
        </div>
      </div>
    </div>
  );
};
