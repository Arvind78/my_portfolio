import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from 'typewriter-effect';
import { socialMedia } from "../constants";
import { Link } from "react-router-dom";

const typewriterStrings=[
  'Building Scalable Web Applications',
  'Expert in MERN Stack Development',
  'Crafting Beautiful User Interfaces',
  'Developing RESTful APIs',
  'Integrating Third-Party APIs',
  'Writing Clean and Maintainable Code',
  'Optimizing for Performance and Security',
  'Deploying Applications to the Cloud',
  'Creating Responsive Designs with Tailwind CSS',
  'Mastering Modern JavaScript Frameworks',
]
const Hero = () => {
  return (
    <section id="home" className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Arvind </span>
          </h1>
          <h2 className={`text-[#915EFF]  text-[26px] sm:text-[34px] font-[700] `}>
          <Typewriter options={{ strings:typewriterStrings, autoStart: true, loop: true  , cursor: '.'}} />
          </h2>
          <div className="flex justify-start items-center gap-4 mt-4 absolute top-[150px] z-10">
  {socialMedia?.map((social, index) => (
    <Link
      to={social.link}
      target="_blank"
      key={index}
      className="w-[40px] h-[40px] cursor-pointer rounded-full bg-[#fff] flex justify-center items-center shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:rotate-[15deg]"
    >
      <img
        src={social.icon}
        alt={social.name}
        className={`${
          social.name === "github"
            ? "w-[40px] h-[40px]"
            : "w-[32px] h-[32px]"
        } object-contain rounded-full transition-transform duration-300 hover:scale-110`}
      />
    </Link>
  ))}
</div>



        </div>
      </div>

      {/* <ComputersCanvas /> */}


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
