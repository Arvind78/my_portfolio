import React from "react";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion"; // Ensure this utility is defined correctly
import Skills from "./Skills";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <section className="w-full py-20">
      <motion.div
        className="flex justify-center items-center flex-col"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className={`${styles.sectionHeadText} text-center pb-16`}>
          Experience & Skills.
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Experience Section */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)} // Make sure `slideIn` is properly defined
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-[18px] sm:text-xl font-semibold mb-2">Work Experience:</h3>
            <i className="block mb-2 text-[12px] sm:text-[14px]">January 2023 – Present (1 Year)</i>
            <p className="text-[12px] sm:text-[14px] mb-4">
              As a Full Stack Developer at Cadillacs Exprice, I have been
              responsible for designing and building web applications with a
              focus on both frontend and backend development. My role involves:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-[12px] sm:text-[14px]">
              <li>
                <strong>Frontend Development:</strong> Building dynamic and
                responsive user interfaces using <strong>React</strong>,{" "}
                <strong>Next.js</strong>, <strong>React Native</strong>, and{" "}
                <strong>Tailwind CSS</strong>.
              </li>
              <li>
                <strong>Backend Development:</strong> Developing and maintaining
                backend services with <strong>Node.js</strong>, <strong>Express</strong>,{" "}
                and <strong>Prisma ORM</strong>.
              </li>
              <li>
                <strong>Cloud Integration:</strong> Integrating cloud platforms
                like <strong>AWS S3</strong> for file uploads and{" "}
                <strong>Firebase</strong> for authentication.
              </li>
              <li>
                <strong>API Integration:</strong> Managing RESTful APIs and
                utilizing <strong>Axios</strong>.
              </li>
              <li>
                <strong>Testing & Debugging:</strong> Ensuring code quality
                through <strong>Jest</strong> testing and{" "}
                <strong>React Testing Library</strong>.
              </li>
              <li>
                <strong>Collaboration & Agile:</strong> Participating in agile
                practices, including sprint planning, standups, and code reviews
                using <strong>Git</strong>.
              </li>
            </ul>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)} // Make sure `slideIn` is properly defined
            className="flex-[0.75] bg-transparent p-8 rounded-2xl"
          >
            <Skills />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
