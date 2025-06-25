import { PostedJobDesc } from "../Components/PostedJobs/PostedJobDesc";
import { PostedJobs } from "../Components/PostedJobs/PostedJobs";

export const PostedJobPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 p-4 font-['poppins'] flex gap-3">
      <PostedJobs />

      <PostedJobDesc />
    </div>
  );
};
