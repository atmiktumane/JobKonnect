import { Avatar, Button, Divider, Text } from "@mantine/core";
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const TalentCard = (props: any) => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-mine-shaft-900 rounded-lg hover:shadow-[0_0_3px_3px_black] hover:shadow-bright-sun-300">
      {/* Row 1 */}
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          {/* Profile Photo */}

          <Avatar radius="xl" src={`/${props.image}.png`} />

          {/* Name, Occupation, Company */}
          <div>
            <h6 className="font-semibold">{props.name}</h6>
            <p className="text-xs">
              {props.role} &bull; {props.company}
            </p>
          </div>
        </div>

        {/* Favourites Icon */}
        <FaRegHeart className="text-xl" />
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap items-center gap-3 text-xs [&>div]:px-3 [&>div]:py-0.5 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg ">
        {props.topSkills.map((skill: string, index1: number) => (
          <div key={index1}>{skill}</div>
        ))}
      </div>

      {/* Row 3 */}
      <Text size="xs" lineClamp={3}>
        {props.about}
      </Text>

      <Divider size="xs" color="mineShaft.7" />

      {/* Row 4 */}
      <div className="flex items-center justify-between">
        <p className="font-semibold">&#8377;{props.expectedCtc}</p>
        <div className="flex items-center gap-0.5 text-xs">
          <IoLocationOutline className="text-lg" />
          <p>{props.location}</p>
        </div>
      </div>

      <Divider size="xs" color="mineShaft.7" />

      {/* Row 5 */}
      <div className="flex items-center gap-3 [&>*]:w-1/2">
        <Link to="/talent-profile">
          <Button fullWidth variant="outline" color="brightSun.4">
            Profile
          </Button>
        </Link>

        <div>
          <Button fullWidth variant="light" color="brightSun.4">
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};
