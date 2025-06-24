import { Button, Divider } from "@mantine/core";
import { TbBookmark } from "react-icons/tb";
import { cards, desc, skills } from "../../Data/JobDescData";
//@ts-ignore
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

export const JobDesc = () => {
  const data = DOMPurify.sanitize(desc);
  return (
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
          <Link to="/apply-job">
            <Button variant="light" color="brightSun.4">
              Apply
            </Button>
          </Link>

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
              <div
                key={index}
                className="bg-bright-sun-400/15 text-sm text-bright-sun-400 w-fit px-2 py-0.5 rounded-full"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <Divider size="xs" my="xl" />

      {/* Row 4 - Advance HTML & CSS - DOM Purify */}
      <div
        className="[&_h4]:font-semibold [&_h4]:text-lg [&_h4]:my-4 [&_p]:text-justify [&_li]:marker:text-bright-sun-400 [&_li]:mb-2 "
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>

      <Divider size="xs" my="xl" />

      {/* Row 5 - About Company */}
      <div>
        {/* Company Row */}
        <div className="flex justify-between mb-5">
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

            {/* Data */}
            <div>
              <h5 className="text-lg font-semibold">Google</h5>
              <p className="text-mine-shaft-300">10K+ Employees</p>
            </div>
          </div>

          {/* Right - Apply Button */}
          <Link to="/company">
            <Button variant="light" color="brightSun.4">
              Company Page
            </Button>
          </Link>
        </div>

        {/* Company About Us */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quia culpa ipsum, consequuntur cupiditate temporibus voluptatum dicta
          possimus accusantium sed eius molestiae explicabo architecto dolorem
          esse porro vero non praesentium.
        </p>
      </div>
    </div>
  );
};
