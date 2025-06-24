import { Avatar, Divider, Tabs } from "@mantine/core";
import { GrLocation } from "react-icons/gr";
import { AboutCompany } from "./AboutCompany";
import { CompanyJobs } from "./CompanyJobs";
import { CompanyEmployees } from "./CompanyEmployees";

export const Company = () => {
  return (
    <div className="flex flex-col px-3">
      {/* Row 2 */}
      <div className="mt-10 flex justify-between">
        {/* Left */}
        <div>
          <h5 className="text-3xl font-semibold">Google</h5>
          <div className="flex items-center gap-1 text-mine-shaft-300 mt-1">
            <GrLocation />
            <p>New York, United States</p>
          </div>
        </div>

        {/* Right */}
        <Avatar.Group>
          <Avatar src="/profilePhoto.png" />
          <Avatar src="/avatar-2.png" />
          <Avatar src="/avatar-3.png" />
          <Avatar>+10k</Avatar>
        </Avatar.Group>
      </div>

      <Divider size="xs" my="xl" />

      {/* Tabs */}
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
          {/* Tabs - Heading */}
          <Tabs.List className="[&_button]:!text-md [&_button]:!pt-3 font-semibold [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="job">Jobs</Tabs.Tab>
            <Tabs.Tab value="employee">Employees</Tabs.Tab>
          </Tabs.List>

          {/* Tabs - Content */}
          <Tabs.Panel value="about">
            <AboutCompany />
          </Tabs.Panel>

          <Tabs.Panel value="job">
            <CompanyJobs />
          </Tabs.Panel>

          <Tabs.Panel value="employee">
            <CompanyEmployees />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
