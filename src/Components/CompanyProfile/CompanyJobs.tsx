import { jobList } from "../../Data/JobsData";
import { JobCard } from "../FindJobs/JobCard";

export const CompanyJobs = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {jobList.map((item, index) => (
        // {/* Card */}
        <JobCard key={index} {...item} />
      ))}
    </div>
  );
};
