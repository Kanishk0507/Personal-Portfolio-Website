import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        /> */}

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center px-4 text-center mb-4">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
      </section>


      <section className="w-full flex items-center justify-center px-4 m-0 p-0">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] leading-[30px] max-w-4xl m-0 text-center'
        >
          I'm a skilled software developer with hands-on experience in Swift, Flutter, Java, and JavaScript, and a strong command of frameworks like React, Node.js, and Firebase. I specialize in building intuitive, high-performance mobile and web applications—from AI-driven iOS apps to full-stack solutions. <br /><br />

          I'm a fast learner who thrives in collaborative environments and loves turning complex ideas into practical, user-friendly products. Whether it's crafting a seamless UI or integrating robust backend services, I’m driven to solve real-world problems through clean, scalable code. <br /><br />

          Let’s work together to turn your vision into reality!
        </motion.p>
      </section>


      <div className='mt-20 flex flex-wrap justify-center gap-10'>
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div>

    </>
  );
};

export default SectionWrapper(About, "about");
