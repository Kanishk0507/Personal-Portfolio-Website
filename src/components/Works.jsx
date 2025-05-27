import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Project Card Component
const ProjectCard = ({
  index,
  name,
  description,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full xs:w-[280px] sm:w-[320px]"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary hover:bg-[#2d2d2d] transition-colors duration-300 p-5 rounded-2xl h-[400px] flex flex-col'
      >
        <div className='mb-3'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
        </div>

        <div className='flex-1 min-h-0 overflow-y-auto pr-1'>
          <p className='text-secondary text-[14px]'>
            {description}
          </p>
        </div>

        <div
          className='mt-4 flex items-center gap-3 cursor-pointer'
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <div className='black-gradient w-9 h-9 rounded-full flex justify-center items-center'>
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <p className='text-white text-[14px] font-medium'>
            Check the code on GitHub
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

// Works Section
const Works = () => {
  return (
    <section className="w-full px-4 sm:px-0 py-16 flex flex-col items-center text-center">
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto'
      >
        Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with
        links to code repositories. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </motion.p>

      {/* Project Cards */}
      <div className='mt-16 flex flex-wrap justify-center gap-7 w-full'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;

