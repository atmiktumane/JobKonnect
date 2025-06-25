import { Badge, Tabs } from "@mantine/core";
import { JobDesc } from "../JobDesc/JobDesc";
import { talents } from "../../Data/TalentsData";
import { TalentCard } from "../FindTalents/TalentCard";

export const PostedJobDesc = () => {
  return (
    <div className="w-3/4 px-5">
      <div className="text-xl font-semibold">
        Software Engineer
        <Badge variant="light" color="brightSun.4" ml="sm">
          Badge
        </Badge>
      </div>
      <p className="text-sm text-mine-shaft-300 mb-5">
        New York, United States
      </p>

      {/* Tabs */}
      <Tabs radius="lg" autoContrast variant="outline" defaultValue="overview">
        <Tabs.List className="[&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400 mb-5">
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
          <Tabs.Tab value="invited">Invited</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="overview">
          <JobDesc overview />
        </Tabs.Panel>
        <Tabs.Panel value="applicants">
          {/* Talent Cards */}
          <div className="grid grid-cols-2 gap-5">
            {talents.map((talent, index) => (
              // {/* Card */}
              <TalentCard key={index} {...talent} applicants />
            ))}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="invited">
          {/* Talent Cards */}
          <div className="grid grid-cols-2 gap-5">
            {talents.map((talent, index) => (
              // {/* Card */}
              <TalentCard key={index} {...talent} invited />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
