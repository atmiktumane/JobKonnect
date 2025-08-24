import { Button } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { JobDesc } from "../Components/JobDesc/JobDesc";
import { RecommendedJob } from "../Components/JobDesc/RecommendedJob";
import { useEffect, useState } from "react";
import { errorNotification } from "../Components/services/NotificationService";
import { getJobByIDAPI } from "../Services/JobService";

export const JobDescPage = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState<any>(null);

  // API Call
  const getJobByIdFunction = async () => {
    try {
      const response = await getJobByIDAPI(id);

      setJobDetails(response);
    } catch (error: any) {
      // console.log(error);
      errorNotification("Failed to fetch Job By Id", error.response?.data);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    getJobByIdFunction();
  }, [id]);

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
        <div className="w-3/4">
          <JobDesc {...jobDetails} />
        </div>

        {/* Right */}
        <RecommendedJob />
      </div>
    </div>
  );
};
