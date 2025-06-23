import { Button } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { JobDesc } from "../Components/JobDesc/JobDesc";
import { RecommendedJob } from "../Components/JobDesc/RecommendedJob";

export const JobDescPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 p-6 font-['poppins']">
      {/* Back Button */}
      <Link to="/find-job" className="inline-block my-4">
        <Button
          leftSection={<FaArrowLeft />}
          variant="light"
          color="brightSun.4"
        >
          Back
        </Button>
      </Link>

      {/* Content */}
      <div className="mt-8 flex justify-between gap-5">
        {/* Left - Job Description */}
        <JobDesc />

        {/* Right */}
        <RecommendedJob />
      </div>
    </div>
  );
};
