import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion"; // Import this if not already

const Tech = () => {
  return (
    <div className="w-full text-center">
      {/* Title and Subtitle */}
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[17px] uppercase tracking-wider">My Skills</p>
        <h2 className="text-white text-[30px] sm:text-[40px] font-bold">Technologies.</h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="w-32 h-36 bg-tertiary hover:bg-[#2d2d2d] rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-105 transition-all duration-300"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <p className="text-white text-center text-sm font-medium">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
