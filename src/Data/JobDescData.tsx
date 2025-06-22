import { LuMapPin } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { TbPremiumRights, TbRecharging } from "react-icons/tb";

const cards = [
  { name: "Location", icon: LuMapPin, value: "New York" },
  { name: "Experience", icon: BsBriefcase, value: "Expert" },
  { name: "Salary", icon: TbPremiumRights, value: "48 LPA" },
  { name: "Job Type", icon: TbRecharging, value: "Full Time" },
];

const skills = [
  "React",
  "Spring Boot",
  "Java",
  "Python",
  "Node.js",
  "MongoDB",
  "Express",
  "Django",
  "PostgreSQL",
];

const desc =
  "<h4>About The Job</h4><p>At UIHUT, we are a passionate and growing design-tech team focused on delivering exceptional UI/UX experiences. We are looking for a skilled frontend developer who thrives on turning design into clean, interactive user interfaces.</p>" +
  "<h4>Responsibilities</h4><ul><li>Develop and maintain responsive front-end interfaces using React</li><li>Collaborate with designers to bring UI mockups to life</li><li>Ensure cross-browser compatibility and optimize page performance</li><li>Work with REST APIs and integrate with backend systems</li></ul>" +
  "<h4>Requirements</h4><ul><li>2+ years of experience with React.js</li><li>Good understanding of HTML, CSS, and JavaScript</li><li>Experience with Tailwind CSS or any utility-first CSS framework</li><li>Familiarity with Git and version control</li></ul>" +
  "<h4>Why Join Us?</h4><ul><li>Work with a passionate and creative remote team</li><li>Flexible work schedule</li><li>Opportunities to grow into full-stack roles</li><li>Annual bonuses and performance incentives</li></ul>";
export { cards, skills, desc };
