import { Button } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Company } from "../Components/CompanyProfile/Company";
import { SimilarCompanies } from "../Components/CompanyProfile/SimilarCompanies";

export const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 p-6 font-['poppins']">
      {/* Back Button : Navigate to Previous Page */}
      <Button
        onClick={() => navigate(-1)}
        leftSection={<FaArrowLeft />}
        variant="light"
        color="brightSun.4"
      >
        Back
      </Button>

      <div className="flex gap-5 my-5">
        {/* Left - Company Details */}
        <div className="w-3/4">
          {/* Row 1 - Images */}
          <div className="relative">
            {/* Background Img */}
            <img
              src="/backgroundProfileImg.png"
              alt="BackgroundImage"
              className="h-36 w-full rounded-t-xl"
            />

            <div className="absolute -bottom-10 left-4 bg-mine-shaft-950 rounded-3xl">
              <img
                src="/Companies_Logo/Google.png"
                alt="Company Logo"
                className=" w-32 h-32"
              />
            </div>
          </div>

          {/* Row - Company Details */}
          <Company />
        </div>

        {/* Right - Similar Companies */}
        <SimilarCompanies />
      </div>
    </div>
  );
};
