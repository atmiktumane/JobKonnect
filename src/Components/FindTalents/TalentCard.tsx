import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaRegHeart } from "react-icons/fa";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { DateInput, TimeInput } from "@mantine/dates";
import { useRef, useState } from "react";
import dayjs from "dayjs";

export const TalentCard = (props: any) => {
  // Modal Display State
  const [opened, { open, close }] = useDisclosure(false);

  // Date Input State
  const [value, setValue] = useState<string | null>(null);

  // Time Input
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col justify-between gap-3 p-4 bg-mine-shaft-900 rounded-lg hover:shadow-[0_0_3px_3px_black] hover:shadow-bright-sun-300">
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
        {props.invited ? (
          <>
            <div className="flex items-center gap-1">
              <IoCalendarOutline className="text-mine-shaft-300" />
              <p className="text-mine-shaft-300 text-sm font-medium">
                Interview: August 27, 2024 10:00 AM
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="font-semibold text-sm">&#8377;{props.expectedCtc}</p>
            <div className="flex items-center gap-0.5">
              <IoLocationOutline className="text-sm text-mine-shaft-400" />
              <p className="text-xs text-mine-shaft-400">{props.location}</p>
            </div>
          </>
        )}
      </div>

      <Divider size="xs" color="mineShaft.7" />

      {/* Row 5 */}
      <div className="flex items-center gap-3 [&>*]:w-1/2">
        {props.invited ? (
          <>
            <Button fullWidth variant="outline" color="brightSun.4">
              Accept
            </Button>

            <Button fullWidth variant="light" color="brightSun.4">
              Reject
            </Button>
          </>
        ) : (
          <>
            {/* Profile Btn */}
            <Link to="/talent-profile">
              <Button fullWidth variant="outline" color="brightSun.4">
                Profile
              </Button>
            </Link>

            {/* Applicants ? (Posted Job Desc - Schedule) : (Find Talents - Message) */}
            <div>
              {props.applicants ? (
                <Button
                  fullWidth
                  variant="light"
                  color="brightSun.4"
                  rightSection={<IoCalendarOutline />}
                  onClick={open}
                >
                  Schedule
                </Button>
              ) : (
                <Button fullWidth variant="light" color="brightSun.4">
                  Message
                </Button>
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal - Schedule Interview */}
      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        {/* Modal content */}
        <div className="flex flex-col gap-5">
          {/* Date Input */}
          <DateInput
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Enter Date"
            minDate={dayjs().format("YYYY-MM-DD")}
          />

          {/* Time Input */}
          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />

          {/* Submit Button */}
          <Button fullWidth variant="light" color="brightSun.4">
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};
