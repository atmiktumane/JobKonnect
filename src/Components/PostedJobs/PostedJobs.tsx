import { Tabs } from "@mantine/core";
import { PostedJobCard } from "./PostedJobCard";
import { activeJobs, draftJobs } from "../../Data/PostedJobData";

export const PostedJobs = () => {
  return (
    <div className="w-2/6 ">
      {/* Title */}
      <h4 className="text-xl font-semibold mb-4">Jobs</h4>

      {/* Tabs - Active & Drafts */}
      <Tabs autoContrast variant="pills" defaultValue="active">
        <Tabs.List className="[&_button]:!font-medium [&_button[aria-selected='false']]:bg-mine-shaft-900 mb-5">
          <Tabs.Tab value="active">Active [{activeJobs.length}]</Tabs.Tab>
          <Tabs.Tab value="draft">Draft [{draftJobs.length}]</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="active">
          <div className="flex flex-col gap-4">
            {activeJobs.map((item, index) => {
              return <PostedJobCard key={index} {...item} />;
            })}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="draft">
          <div className="flex flex-col gap-4">
            {draftJobs.map((item, index) => {
              return <PostedJobCard key={index} {...item} />;
            })}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
