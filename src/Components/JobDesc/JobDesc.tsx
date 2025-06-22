import { Button, Divider } from "@mantine/core";
import { TbBookmark } from "react-icons/tb";
import { cards, skills } from "../../Data/JobDescData";

export const JobDesc = () => {
  return (
    <div className="flex gap-5">
      {/* Left - Job Description */}
      <div className="w-3/4">
        {/* Row 1 */}
        <div className="flex justify-between">
          {/* Left */}
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

          {/* Right */}
          <div className="flex flex-col items-center gap-2">
            {/* Apply Button */}
            <Button variant="light" color="brightSun.4">
              Apply
            </Button>

            {/* Save Job Icon */}
            <TbBookmark className="text-2xl text-bright-sun-400 cursor-pointer" />
          </div>
        </div>

        <Divider size="xs" my="xl" />

        {/* Row 2 */}
        <div className="flex justify-between items-center">
          {cards.map((item: any, index: number) => {
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Icon */}
                <div className="w-fit p-1.5 bg-bright-sun-400/15 rounded-full">
                  {<item.icon className="text-3xl text-bright-sun-400" />}
                </div>
                <h6 className="text-sm">{item.name}</h6>
                <p className="font-semibold">{item.value}</p>
              </div>
            );
          })}
        </div>

        <Divider size="xs" my="xl" />

        {/* Row 3 - Required Skills */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Required Skills</h4>

          <div className="flex flex-wrap gap-2">
            {skills.map((item, index) => {
              return (
                <div className="bg-bright-sun-400/15 text-sm text-bright-sun-400 w-fit px-2 py-0.5 rounded-full">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
