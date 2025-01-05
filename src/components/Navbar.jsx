import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { StarsCanvas } from "./canvas";
import  Typewriter from "typewriter-effect";

const Navbar = () => {
  const [active, setActive] = useState("Resume");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    "Full Stack Developer",
    "Skills  -  HTML",
    "Skills  -  CSS",
    "Skills  -  JavaScript",
    "Skills  -  React",
    "Skills  -  TypeScript",
    "Skills  -  Next.js",
    "Skills  -  Redux",
    "Skills  -  Tailwind CSS",
    "Skills  -  Sass",
    "Skills  -  Less",
    "Skills  -  Git",
    "Skills  -  GitHub",
    "Skills  -  Node.js",
    "Skills  -  Express.js",
    "Skills  -  MongoDB",
    "Skills  -  PostgreSQL",
    "Skills  -  Firebase",
    "Skills  -  Bun",
    "Skills  -  Docker",
    "Skills  -  Aws"


  ]

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-6 lg:py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
         
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain rounded-full' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Arvind &nbsp;
            
            <span className='sm:flex hidden text-[#7a46eb]'> 
             | &nbsp;  <Typewriter
                options={{
                  strings: skills,
                  autoStart: true,
                  loop: true,
                  cursor: "~:",
                  deleteSpeed: 100,
                  delay: 100,
                  minDelay: 150,
                  pauseDelay: 30,
                  shuffle: true,
                }}
              />
            </span>
          </p>
        </Link>

        <ul className='list-none hidden lg:flex flex-row gap-10   py-3 px-6 '>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "bg-white px-6 py-[6px] text-black rounded-[20px] font-semibold transition-all ease-in-out duration-300 " : "text-secondary  py-[6px]"
              }  text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center '>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className={`${toggle ? "w-[22px] h-[22px] object-contain " : "w-[28px] h-[28px] object-contain"}`}
            onClick={() => setToggle(!toggle)}
          />

          <div
          className={`${
            toggle ? "translate-y-0 opacity-100 max-h-[500px]" : "translate-y-[-200px] opacity-0 max-h-0"
          } flex flex-col p-6 black-gradient absolute top-16 right-0 mx-1 md:mx-3 my-2 w-[98%] md:w-[350px] z-10 rounded-xl transition-all duration-500 ease-in-out overflow-hidden`}
          >
            <StarsCanvas/>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
