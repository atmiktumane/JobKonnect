import { UserProfile } from "../Components/Profile/UserProfile";
import { profile } from "../Data/TalentsData";

export const ProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 px-6 font-['poppins']">
      {/* Content */}
      <UserProfile {...profile} />
    </div>
  );
};
