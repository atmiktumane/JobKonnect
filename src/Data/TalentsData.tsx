import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { TbRecharging } from "react-icons/tb";

const searchFields = [
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
    title: "Skills",
    icon: TbRecharging,
    options: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "Ruby",
      "PHP",
      "SQL",
      "MongoDB",
      "Testing and Debugging",
      "Agile Methodologies",
      "DevOps",
      "AWS",
      "Azure",
      "Google Cloud",
    ],
  },
];

const talents = [
  {
    name: "Jarrod Wood",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "SpringBoot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    expectedCtc: "48 - 60LPA",
    location: "New York, United States",
    image: "profilePhoto",
  },
  {
    name: "Ananya Singh",
    role: "Full Stack Developer",
    company: "Microsoft",
    topSkills: ["Node.js", "Angular", "PostgreSQL"],
    about:
      "Ananya is a seasoned Full Stack Developer at Microsoft with a knack for creating robust enterprise-level applications. She blends modern front-end interfaces with solid backend systems to deliver secure and efficient software products.",
    expectedCtc: "30 - 40LPA",
    location: "Bangalore, India",
    image: "profilePhoto",
  },
  {
    name: "Daniel Kim",
    role: "Data Scientist",
    company: "Netflix",
    topSkills: ["Python", "TensorFlow", "SQL"],
    about:
      "Daniel leverages machine learning and data science techniques at Netflix to build models that personalize content recommendations. He thrives on analyzing complex data and transforming it into actionable insights.",
    expectedCtc: "45 - 55LPA",
    location: "Los Angeles, United States",
    image: "profilePhoto",
  },
  {
    name: "Riya Mehta",
    role: "UI/UX Designer",
    company: "Adobe",
    topSkills: ["Figma", "Adobe XD", "User Research"],
    about:
      "Riya is a creative UI/UX Designer at Adobe who focuses on designing intuitive user experiences. She uses user research and modern design tools to craft interfaces that are both functional and delightful.",
    expectedCtc: "18 - 25LPA",
    location: "Pune, India",
    image: "profilePhoto",
  },
  {
    name: "Liam Thompson",
    role: "DevOps Engineer",
    company: "Amazon Web Services",
    topSkills: ["AWS", "Docker", "Kubernetes"],
    about:
      "Liam ensures the reliability and scalability of cloud infrastructure at AWS. He automates deployments and builds CI/CD pipelines that support rapid software delivery across global services.",
    expectedCtc: "38 - 50LPA",
    location: "London, United Kingdom",
    image: "profilePhoto",
  },
  {
    name: "Sara Al-Fulan",
    role: "Cybersecurity Analyst",
    company: "Cisco",
    topSkills: ["Network Security", "SIEM", "Python"],
    about:
      "Sara protects enterprise networks from emerging cyber threats at Cisco. With expertise in SIEM tools and scripting, she monitors, detects, and responds to incidents in real time.",
    expectedCtc: "28 - 36LPA",
    location: "Dubai, UAE",
    image: "profilePhoto",
  },
];

const profile = {
  name: "Jarrod Wood",
  role: "Software Engineer",
  company: "Google",
  location: "New York, United States",
  about:
    "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
  skills: [
    "React",
    "SpringBoot",
    "MongoDB",
    "HTML",
    "CSS",
    "Javascript",
    "Node.js",
    "Express",
    "MySQL",
    "Python",
    "Django",
    "Figma",
    "Sketch",
    "Docker",
    "AWS",
  ],
  experiences: [
    {
      title: "Software Engineer III",
      company: "Google",
      location: "New York, United States",
      startDate: "Apr 2022",
      endDate: "Present",
      description:
        "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    },
    {
      title: "Software Engineer",
      company: "Microsoft",
      location: "Seattles, United States",
      startDate: "Aug 2020",
      endDate: "March 2022",
      description:
        "As a Software Engineer at Microsoft, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    },
  ],
  certifications: [
    {
      name: "Google Professional Cloud Architech",
      issuer: "Google",
      issueDate: "Aug 2023",
      certificateId: "CB72982GG",
    },
    {
      name: "Microsoft Certified: Azure Solutions Architech Expert",
      issuer: "Microsoft",
      issueDate: "May 2022",
      certificateId: "MS12345AZ",
    },
  ],
};

export { searchFields, talents, profile };
