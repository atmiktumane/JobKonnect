import { Tabs } from "@mantine/core";
import { jobList } from "../../Data/JobsData";
import { JobHistoryCard } from "./JobHistoryCard";

export const JobHistory = () => {
  return (
    <div>
      <Tabs autoContrast radius="lg" variant="outline" defaultValue="applied">
        <Tabs.List className="[&_button]:font-semibold [&_button[data-active='true']]:text-bright-sun-400 mb-5">
          <Tabs.Tab value="applied">Applied</Tabs.Tab>
          <Tabs.Tab value="saved">Saved</Tabs.Tab>
          <Tabs.Tab value="offered">Offered</Tabs.Tab>
          <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
        </Tabs.List>

        {/* Tabs Content */}
        {/* Applied Job Cards - Grid */}
        <Tabs.Panel value="applied">
          <div className="grid grid-cols-3 gap-5">
            {jobList.map((item, index) => (
              // {/* Card */}
              <JobHistoryCard key={index} {...item} applied />
            ))}
          </div>
        </Tabs.Panel>

        {/* Saved Job Cards - Grid */}
        <Tabs.Panel value="saved">
          <div className="grid grid-cols-3 gap-5">
            {jobList.map((item, index) => (
              // {/* Card */}
              <JobHistoryCard key={index} {...item} saved />
            ))}
          </div>
        </Tabs.Panel>

        {/* Offered Job Cards - Grid */}
        <Tabs.Panel value="offered">
          <div className="grid grid-cols-3 gap-5">
            {jobList.map((item, index) => (
              // {/* Card */}
              <JobHistoryCard key={index} {...item} offered />
            ))}
          </div>
        </Tabs.Panel>

        {/* Interviewing Job Cards - Grid */}
        <Tabs.Panel value="interviewing">
          <div className="grid grid-cols-3 gap-5">
            {jobList.map((item, index) => (
              // {/* Card */}
              <JobHistoryCard key={index} {...item} interviewing />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
