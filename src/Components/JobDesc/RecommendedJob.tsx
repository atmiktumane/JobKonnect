import { jobList } from "../../Data/JobsData";
import { JobCard } from "../FindJobs/JobCard";

export const RecommendedJob = () => {
  return (
    <div className="w-1/4 flex flex-col gap-5">
      <h3 className="text-xl font-semibold">Recommended Jobs</h3>
      {jobList.map(
        (item, index) =>
          // {/* Card */}
          index < 5 && <JobCard key={index} {...item} />
      )}
    </div>
  );
};
