import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
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
  );
};

export default SectionWrapper(Tech, "");
