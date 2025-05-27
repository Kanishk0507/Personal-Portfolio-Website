import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary hover:bg-[#2d2d2d] transition-colors duration-300 p-5 rounded-2xl w-[320px] h-[400px] flex flex-col'
      >
        {/* Project Name */}
        <div className='mb-3'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
        </div>

        {/* Description (Scrollable if long) */}
        <div className='flex-1 min-h-0 overflow-y-auto pr-1'>
          <p className='text-secondary text-[14px]'>
            {description}
          </p>
        </div>

        {/* GitHub Link Below */}
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


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
