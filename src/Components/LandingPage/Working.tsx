import { Avatar } from "@mantine/core";
import { workings } from "../../Data/Data";

const Working = () => {
  return (
    <div className="px-[20px] py-4 flex flex-col items-center gap-10">
      {/* Row 1 - Heading & Description */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h3 className="text-mine-shaft-100 text-3xl font-semibold">
          How it <span className="text-bright-sun-400">Works</span>
        </h3>
        <p className="text-mine-shaft-300">
          Effortlessly navigate through the process and land your dream <br />{" "}
          job.
        </p>
      </div>

      {/* Row 2 - Left (image) + Right (Info) */}
      <div className="w-full flex items-center justify-between gap-4">
        {/* Col 1 - Image */}
        <div className="w-[50%] relative">
          {/* Image */}
          <img
            src="/Working/Working_Girl.png"
            alt="WorkingGirl"
            className="w-[30rem]"
          />
          {/* Card */}
          <div className="absolute top-16 right-10 xl:right-[150px] w-36 flex flex-col items-center gap-1 p-4 border border-bright-sun-300 rounded-lg backdrop-blur-md">
            <Avatar src="/avatar-2.png" alt="work-profile" size="lg" />

            <h3 className="text-sm font-semibold text-mine-shaft-200 text-center">
              Complete your Profile
            </h3>
            <p className="text-xs text-mine-shaft-300">70% Completed</p>
          </div>
        </div>

        {/* Col 2 - Info : Resume, Job & Hired */}
        <div className="w-[50%] flex flex-col p-14 gap-8">
          {workings.map((working, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* left - image */}
              <div className="w-fit p-2 bg-bright-sun-300 rounded-full">
                <img
                  src={`/Working/${working.id}.png`}
                  alt={`${working.id}`}
                  className="w-12 h-12"
                />
              </div>

              {/* right */}
              <div>
                <h4 className="text-mine-shaft-200 font-semibold text-lg">
                  {working.name}
                </h4>
                <p className="text-mine-shaft-300 text-sm">{working.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
