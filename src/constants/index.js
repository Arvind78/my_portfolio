import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  vikash,
  Dhanpat,
  Mustafa,
  carrent,
  jobit,
  tripguide,
  threejs,
  poki,
  cm,
  defa,
} from "../assets";

export const navLinks = [  {
  id: "home",
  title: "Home",
},
  {
    id: "about",
    title: "About",
  },

  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Instractor & Mentor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Cadillac's",
    icon: "cadillacs", 
    iconBg: "#123456", 
    date: "June 2024 - Present",
    points: [
      "Designing and developing scalable web and blockchain applications using modern frameworks and tools.",
      "Building and integrating APIs, ensuring seamless communication between frontend and backend services.",
      "Collaborating with teams to deliver robust and user-friendly solutions.",
      "Implementing responsive and interactive designs to enhance user experience.",
      "Maintaining and improving application performance, security, and code quality.",
      "Participating in peer code reviews and mentoring junior developers.",
    ],
  },
  {
    title: "Full Stack Internship Training Program",
    company_name: "Internshala",
    icon: "internshala", // Ensure the appropriate icon or image is imported
    iconBg: "#F4F4F4", // Replace with a suitable background color
    date: "December 2023 - May 2024",
    points: [
      "Gained hands-on experience in full-stack development using MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Built and deployed multiple projects, focusing on scalability and performance optimization.",
      "Learned best practices for API integration, version control, and agile development.",
      "Enhanced problem-solving skills through collaborative team projects and real-world scenarios.",
      "Received mentorship and guidance to develop industry-ready skills and knowledge.",
    ],
  },
  {
    title: "Full Stack Development Training",
    company_name: "Newton School",
    icon: "newtonschool", // Ensure the correct icon or image is imported
    iconBg: "#1E293B", // Replace with a suitable background color
    date: "February 2022 - October 2023",
    points: [
      "Completed an intensive full-stack development program covering front-end and back-end technologies.",
      "Developed industry-relevant projects using technologies like React.js, Node.js, and MongoDB.",
      "Gained expertise in data structures, algorithms, and problem-solving techniques.",
      "Collaborated on team projects using agile methodologies to deliver scalable and user-centric applications.",
      "Participated in mock interviews and coding challenges to enhance career readiness.",
    ],
  },
  
  
  {
    title: "Post Graduate Diploma in Computer Applications",
    company_name: "EMAX India",
    icon: "emaxIndia", // Ensure the correct icon or image is imported
    iconBg: "#F4E1D2", // Replace with a suitable background color
    date: "September 2020 - August 2021",
    points: [
      "Completed a comprehensive post-graduate diploma focusing on computer applications and software development.",
      "Covered topics such as programming languages, database management, software engineering, and web technologies.",
      "Developed a solid foundation in key concepts of computer science, including algorithms and data structures.",
      "Worked on practical projects, implementing real-world applications using Java and C++.",
      "Participated in workshops and seminars to stay updated with industry trends and technologies.",
    ],
  }
  
];

const testimonials = [
  {
    testimonial:
      "Arvind's expertise in full stack development is unparalleled. He combines the power of MERN with the latest technologies to build innovative solutions that push the limits of what’s possible.",
    name: "Dhanpat Bhartee",
    designation: "Storage and Backup Administrator ",
    company: "@Cognizant",
    image: Dhanpat,
  },
  {
    testimonial:
      "Arvind is a full stack developer who brings exceptional skills to every project. His work in developing seamless Web 3.0 experiences is truly commendable, and his technical insights are invaluable.",
    name: "Mustafa Siddique",
    designation: "CEO & Co-Founder",
    company: "@Cadillacs",
    image:Mustafa,
  },
  {
    testimonial:
      "Arvind’s ability to bridge the gap between traditional and modern technologies is amazing. His expertise in full stack development has been invaluable to our projects.",
    name: "Vikas Yadav",
    designation: "full stack developer",
    company: "@Cadillacs",
    image: vikash,
  },
];



const projects = [
  {
    name: "DeFa Testnet",
    description:
      "A decentralized finance platform enabling seamless lending and borrowing of digital assets. It leverages blockchain technology for secure and transparent transactions, offering an intuitive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: defa,
    source_code_link:
      "https://github.com/Cadillacs-Blockchain-Development/DeFa-Lending-Borrowing-UI.git",
  },
  {
    name: "Climate Mitigate",
    description:
      "A cutting-edge blockchain-based application for managing and tracking digital assets efficiently. Designed with React and Node.js for scalability and an enhanced user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: cm,
    source_code_link:
      "https://github.com/Cadillacs-Blockchain-Development/cm-v2.git",
  },
  {
    name: "Poki Token",
    description:
      "A blockchain-powered presale platform enabling users to participate in token presales securely and efficiently. Built with Next.js, it ensures seamless token distribution, transaction transparency, and user trust.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: poki,
    source_code_link:
      "https://github.com/Cadillacs-Blockchain-Development/poki-token.git",
  },
];


export { services, technologies, experiences, testimonials, projects };
