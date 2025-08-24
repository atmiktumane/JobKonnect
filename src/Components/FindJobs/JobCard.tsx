import { Divider, Text } from "@mantine/core";
import { FaRegClock } from "react-icons/fa";
import { TbBookmark } from "react-icons/tb";
import { Link } from "react-router-dom";
import { timeAgoFunction } from "../services/Utilities";

export const JobCard = (props: any) => {
  return (
    <Link
      to={`/job-desc/${props.id}`}
      className="flex flex-col gap-3 p-4 bg-mine-shaft-900 rounded-lg hover:shadow-[0_0_3px_3px_black] hover:shadow-bright-sun-300 cursor-pointer"
    >
      {/* Row 1 */}
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          {/* Company Logo */}
          <div className="flex items-center justify-center bg-mine-shaft-950 rounded-lg">
            <img
              src={`/Companies_Logo/${props.company}.png`}
              alt=""
              className="w-11 h-11"
            />
          </div>

          {/* Job Role, Company, etc */}
          <div>
            <h6 className="font-semibold">{props.jobTitle}</h6>
            <p className="text-sm">
              {props.company} &#8226;{" "}
              {props.applicants ? props.applicants.length : 0} Applicants
            </p>
          </div>
        </div>

        {/* BookMark Icon */}
        <TbBookmark className="text-2xl" />
      </div>

      {/* Row 2 */}
      <div className="flex items-center gap-3 text-xs [&>div]:px-3 [&>div]:py-0.5 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg ">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>

      {/* Row 3 */}
      <Text size="sm" lineClamp={3}>
        {props.about}
      </Text>

      <Divider size="sm" color="mineShaft.7" />

      {/* Row 4 */}
      <div className="flex items-center justify-between">
        <p className="font-semibold">&#8377;{props.packageOffered} LPA</p>
        <div className="flex items-center gap-1">
          <FaRegClock className="text-sm text-mine-shaft-400" />
          <p className="text-sm text-mine-shaft-400">
            Posted {timeAgoFunction(props.postTime)}
          </p>
        </div>
      </div>
    </Link>
  );
};
