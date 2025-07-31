import { IoBriefcaseOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

const fields = [
  {
    label: "Job Title",
    placeholder: "Enter Job Title",
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
    leftSection: IoBriefcaseOutline,
  },
  {
    label: "Company",
    placeholder: "Enter Company Name",
    options: [
      "Google",
      "Microsoft",
      "Meta",
      "Netflix",
      "Adobe",
      "Facebook",
      "Amazon",
      "Apple",
      "Spotify",
    ],
    leftSection: IoBriefcaseOutline,
  },
  {
    label: "Location",
    placeholder: "Enter Job Location",
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
    leftSection: LuMapPin,
  },
];

export { fields };
