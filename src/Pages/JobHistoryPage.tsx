import { JobHistory } from "../Components/JobHistory/JobHistory";

export const JobHistoryPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 p-4 font-['poppins'] flex flex-col gap-5">
      <h3 className="text-xl font-semibold">Job History</h3>

      <JobHistory />
    </div>
  );
};
