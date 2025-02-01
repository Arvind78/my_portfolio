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
  resume
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
    link: resume,
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
    title: "Instructor & Mentor ",
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
    icon: "https://avatars.githubusercontent.com/u/138363829?s=200&v=4", 
    iconBg: "#ccc", 
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
    icon: "https://th.bing.com/th/id/R.649195f1ebd0e9be02843a5eb73d1474?rik=Yqvkn0TeJIgWGg&riu=http%3a%2f%2fimage3.mouthshut.com%2fimages%2fimagesp%2f925769318s.png&ehk=SueNPyLpN4pEShdYFBRtl%2fGebRQrIVa1%2f4FUVHHxbek%3d&risl=&pid=ImgRaw&r=0", // Ensure the appropriate icon or image is imported
    iconBg: "#ccc", // Replace with a suitable background color
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
    icon: "https://cdn.hashnode.com/res/hashnode/image/upload/v1645601941731/GAjDZ8694.png?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp", // Ensure the correct icon or image is imported
    iconBg: "#ccc", // Replace with a suitable background color
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
    icon: "https://yt3.ggpht.com/ytc/AKedOLQf836x4pL7QOWl7YYdAjwokwSEx8Wjs9JfJWL_JeA=s900-c-k-c0x00ffffff-no-rj", // Ensure the correct icon or image is imported
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


const socialMedia =[{
  name:"github",
  link:"https://github.com/Arvind78",
  icon:"https://img.icons8.com/?size=100&id=WCL5hPLvhUjQ&format=png&color=000000"
},
{
  name:"linkedin",
  link:"https://www.linkedin.com/in/arvind-varma-884a7423a/",
  icon:"https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
},
{
  name:"instagram",
  link:"https://www.instagram.com/arvindvarma_dev/",
  icon:"https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
}

]

export { services, technologies, experiences, testimonials, projects,socialMedia };
