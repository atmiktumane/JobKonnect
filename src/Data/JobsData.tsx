import {
  IoBriefcaseOutline,
  IoLocationOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { TbRecharging } from "react-icons/tb";

const dropdownData = [
  {
    title: "Job Title",
    icon: IoSearchOutline,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    title: "Location",
    icon: IoLocationOutline,
    options: [
      "Delhi",
      "New York",
      "San Francisco",
      "London",
      "Berlin",
      "Tokyo",
      "Sydney",
      "Toronto",
    ],
  },
  {
    title: "Experience",
    icon: IoBriefcaseOutline,
    options: ["Entry Level", "Intermediate", "Expert"],
  },
  {
    title: "Job Type",
    icon: TbRecharging,
    options: ["Full Time", "Part Time", "Contract", "Freelance", "Internship"],
  },
];

export { dropdownData };
