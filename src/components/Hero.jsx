import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start justify-start gap-8`}
      >
        {/* Left: Profile Image + Social Icons */}
        <div className="flex flex-col items-center gap-5 mt-5">
          <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-lg">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>


          {/* Social Icons */}
          <div className="flex gap-4 text-white text-2xl">
            <a
              href="https://www.linkedin.com/in/kanishk11/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Kanishk0507"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:singhkanishk1107@gmail.com"
              className="hover:text-[#915EFF] transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="/Kanishk-Singh-Resume.pdf"
              download
              className="hover:text-[#915EFF] transition"
            >
              <FaDownload />
            </a>
          </div>
        </div>

        {/* Center: Side Marker Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col items-start gap-6 mt-2">
          <div className="text-left">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Kanishk</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              An Aspiring Software Developer <br className="sm:block hidden" />
            </p>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Arrow */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
