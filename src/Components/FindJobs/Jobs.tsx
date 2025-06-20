import { Sort } from "./Sort";
import { jobList } from "../../Data/JobsData";
import { JobCard } from "./JobCard";

export const Jobs = () => {
  return (
    <div className="py-8 flex flex-col gap-8">
      {/* Heading Row */}
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium">Recommended Jobs</h4>

        {/* Sort w.r.t Salary (Low to High, etc) */}
        <Sort />
      </div>

      {/* Cards - Grid */}
      <div className="grid grid-cols-3 gap-5">
        {jobList.map((item, index) => (
          // {/* Card */}
          <JobCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
