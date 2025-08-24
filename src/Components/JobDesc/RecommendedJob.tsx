import { useParams } from "react-router-dom";
import { JobCard } from "../FindJobs/JobCard";
import { useEffect, useState } from "react";
import { errorNotification } from "../services/NotificationService";
import { getAllJobsAPI } from "../../Services/JobService";

export const RecommendedJob = () => {
  const { id } = useParams();

  const [jobList, setJobList] = useState<any>(null);

  const getAllJobsFunction = async () => {
    try {
      const response = await getAllJobsAPI();
      setJobList(response);
    } catch (error: any) {
      errorNotification("Failed to fetch all jobs", error.response?.data);
    }
  };

  useEffect(() => {
    getAllJobsFunction();
  }, []);

  return (
    <div className="w-1/4 flex flex-col gap-5">
      <h3 className="text-xl font-semibold">Recommended Jobs</h3>
      {jobList?.map(
        (item: any, index: number) =>
          // {/* Card */}
          index < 5 && id != item.id && <JobCard key={index} {...item} />
      )}
    </div>
  );
};
