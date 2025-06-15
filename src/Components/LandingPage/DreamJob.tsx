import { FaSearch } from "react-icons/fa";
import bannerBoy from "/boy.png";
import { Avatar } from "@mantine/core";
import profilePhoto from "../../assets/profilePhoto.png";

const DreamJob = () => {
  return (
    <div className="w-full h-[88vh] px-12 py-10 flex items-center gap-2">
      {/* Left Column */}
      <div className="w-[50%] flex flex-col gap-5 text-white">
        <h4 className="text-5xl font-bold leading-tight">
          Find your <span className="text-bright-sun-400">dream job</span> with
          us
        </h4>
        <p>
          Good life begins with a good company. Start explore thousands of jobs
          in one place.
        </p>

        {/* Search - Job Title + Type + Search Icon */}
        <div className="flex gap-2">
          {/* Job Title */}
          <div className="flex flex-col p-2 bg-mine-shaft-700 gap-1 rounded-lg">
            <h6 className="text-sm font-medium">Job Title</h6>
            <input
              type="text"
              placeholder="Software Engineer"
              className="bg-mine-shaft-700 text-sm rounded-lg py-1"
            />
          </div>

          {/* Job Type */}
          <div className="flex flex-col p-2 bg-mine-shaft-700 gap-1 rounded-lg">
            <h6 className="text-sm font-medium">Job Type</h6>
            <input
              type="text"
              placeholder="Fulltime"
              className="bg-mine-shaft-700 text-sm rounded-lg py-1"
            />
          </div>

          {/* Search */}
          <div className="flex items-center justify-center bg-bright-sun-400 px-4 py-2 rounded-lg cursor-pointer">
            <FaSearch className="text-4xl" />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="relative w-[50%] flex items-center justify-center text-white">
        <img src={bannerBoy} alt="" />

        {/* Card 1 */}
        <div className="absolute top-32 -left-4 flex flex-col gap-3 p-2 border border-bright-sun-400 backdrop-blur-md rounded-lg">
          {/* row 1 */}
          <div className="flex gap-2">
            <div className="bg-mine-shaft-700 p-1 rounded-lg">
              <img src="/Google_logo.png" alt="" className="h-7" />
            </div>

            <div className="flex flex-col">
              <h5 className="text-sm">Software Engineer</h5>
              <h6 className="text-xs">New York</h6>
            </div>
          </div>

          {/* row 2 */}
          <div className="flex items-center gap-5 text-xs">
            <p>1 day ago</p>
            <p>120 Applicants</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="absolute bottom-44 -right-2 flex flex-col items-center gap-3 p-2 border border-bright-sun-400 backdrop-blur-md rounded-lg">
          {/* row 1 */}
          <p className="text-sm">10K+ got job</p>

          {/* row 2 */}
          <Avatar.Group>
            <Avatar src={profilePhoto} />
            <Avatar src="/avatar-2.png" />
            <Avatar src="/avatar-3.png" />
            <Avatar>+9K</Avatar>
          </Avatar.Group>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
