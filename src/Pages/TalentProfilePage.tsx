import { Button, Divider } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Profile } from "../Components/TalentProfile/Profile";
import { profile } from "../Data/TalentsData";

export const TalentProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 px-6 pb-10 font-['poppins']">
      <Divider size="xs" />

      {/* Back Button */}
      <Link to="/find-talent" className="inline-block my-4">
        <Button
          leftSection={<FaArrowLeft />}
          variant="light"
          color="brightSun.4"
        >
          Back
        </Button>
      </Link>

      {/* Content */}
      <Profile {...profile} />
    </div>
  );
};
