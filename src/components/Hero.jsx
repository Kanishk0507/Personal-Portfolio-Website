import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* Background Canvas for desktop only */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <ComputersCanvas />
      </div>

      {/* Content */}
      <div
        className={`relative top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-10 sm:gap-8 z-10`}
      >
        {/* Left: Profile + Socials */}
        <div className="flex flex-col items-center gap-5">
          <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-lg">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-4 text-white text-xl sm:text-2xl">
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

        {/* Center Line */}
        <div className="hidden sm:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Kanishk</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              An Aspiring Software Developer
              <br className="sm:block hidden" />
            </p>
          </div>
        </div>
      </div>

      {/* Canvas Below Text for Mobile */}
      <div className="block sm:hidden mt-10 z-0">
        <ComputersCanvas />
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
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
