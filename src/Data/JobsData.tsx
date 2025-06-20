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

const jobList = [
  {
    jobTitle: "Product Designer",
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "32 LPA",
    postedDaysAgo: 12,
    description:
      "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment.",
  },
  {
    jobTitle: "Sr. UX Designer",
    company: "Netflix",
    applicants: 14,
    experience: "Expert",
    jobType: "Part-Time",
    location: "San Francisco",
    package: "40 LPA",
    postedDaysAgo: 5,
    description:
      "Netflix is looking for a Sr. UX Designer to enhance our user experience on streaming platforms. Ideal candidates with mentioned experience would like to work with the dynamic team.",
  },
  {
    jobTitle: "Product Designer",
    company: "Microsoft",
    applicants: 58,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Remote",
    package: "35 LPA",
    postedDaysAgo: 4,
    description:
      "Join Microsoft as a Product Designer and contribute to our new Lightspeed LA studio. We're looking for desingers who are willing to join and work with the Amazing team.",
  },
  {
    jobTitle: "Product Designer",
    company: "Adobe",
    applicants: 23,
    experience: "Expert",
    jobType: "Part-Time",
    location: "Toronto",
    package: "33 LPA",
    postedDaysAgo: 22,
    description:
      "Adobe is seeking a part-time Product Designer to help us enhance our user experience. You will work closely with a collaborative team and build the Product.",
  },
  {
    jobTitle: "Backend Developer",
    company: "Google",
    applicants: 21,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "Bangalore",
    package: "38 LPA",
    postedDaysAgo: 8,
    description:
      "Google is hiring a Backend Developer to join our team in Bangalore. You'll be responsible for developing scalable product with Team collaboration.",
  },
  {
    jobTitle: "SMM Manager",
    company: "Spotify",
    applicants: 73,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Delhi",
    package: "34 LPA",
    postedDaysAgo: 8,
    description:
      "Spotify is looking for an SMM Manager to lead our social media marketing efforts in Delhi. You will create and manage the Team and collaboratively build robust products",
  },
  {
    jobTitle: "Frontend Developer",
    company: "Amazon",
    applicants: 50,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Seattle",
    package: "36 LPA",
    postedDaysAgo: 10,
    description:
      "Amazon is looking for a Frontend Developer to build and maintain our customer-facing applications.",
  },
  {
    jobTitle: "iOS Developer",
    company: "Apple",
    applicants: 30,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Cupertino",
    package: "42 LPA",
    postedDaysAgo: 7,
    description:
      "Apple is seeking an iOS Developer to join our team in Cupertino. You will work on developing cutting-edge applications.",
  },
];

export { dropdownData, jobList };
