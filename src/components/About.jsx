import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope,} from 'react-icons/fa';
import { motion } from "framer-motion"
import '../index.css';


import { useInView } from 'react-intersection-observer';
const phrases = [
  "Hey there, I'm Shah Faisal, a frontend developer with a knack for creating polished digital experiences. Over the past 2+ years, ",
  "I've honed my skills in HTML, CSS, and JavaScript, specializing in crafting intuitive user interfaces and responsive web designs. ",
  "Whether it's optimizing performance or enhancing accessibility, I'm committed to delivering clean, efficient code that brings designs",
  "to life. Let's collaborate to turn your vision into a seamless reality."
]


export function MaskText() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className="body">
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className="lineMask inline-block">
            <motion.p className="p-2 overflow-hidden" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}




function About() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };
  const imgVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };
  const iconsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, delay: 0.4} }
  };

  return (
    <motion.div
      id='About'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" 
      className='mx-auto my-20' id='About'
      >

      <div className='justify-center gap-16 xl:flex-row lg:flex-row md:flex sm:flex-col'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        className="flex justify-center" variants={imgVariants}>
        <img className="max-w-full h-auto object-cover" src='Profile-pic.png' alt='my-pic' />
      </motion.div>
        <div className='mx-auto md:mx-0'>
          <motion.h1 variants={textVariants} className="lg:text-start text-center text-white text-4xl font-bold mb-6">About</motion.h1>

          <motion.div className="flex justify-center">
            <p className="bio-p max-w-md sm:max-w-lg text-justify text-white text-lg font-normal">
              <MaskText />
            </p>
        </motion.div>
        </div>
      </div>

      {/** Icons Section */}
      <motion.div 
        className='flex justify-evenly my-12 mx-auto relative lg:max-w-[1195px]' 
        variants={iconsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
      >

        <div className="flex flex-col items-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            href='https://www.linkedin.com/in/shah-faisal-h/'
            className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center">
            <FaLinkedin className="text-neutral-400 text-2xl hover:text-neutral-50 hover:text-3xl" />
          </motion.a>
          <div className="text-white text-lg mt-2">Linkedin</div>
        </div>
        <div className="flex flex-col items-center">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            href='https://github.com/ShahFH' 
            className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center">
            <FaGithub className="text-neutral-400 text-2xl hover:text-neutral-50 hover:text-3xl" />
          </motion.a>
          <div className="text-white text-lg mt-2">Github</div>
        </div>

        <div className="flex flex-col items-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            href='https://twitter.com/ShahFaisal_H' 
            className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center">
            <FaTwitter className="text-neutral-400 text-2xl hover:text-neutral-50 hover:text-3xl" />
          </motion.a>
          <div className="text-white text-lg mt-2">Twitter</div>
        </div>

        <div className="flex flex-col items-center">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            href='mailto: shahfaisal.swe@gmail.com' 
            className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center">
            <FaEnvelope className='text-neutral-400 text-2xl hover:text-neutral-50 hover:text-3xl' />
          </motion.a>
          <div className="text-white text-lg mt-2">Email</div>
        </div>
        
      </motion.div>
    </motion.div>
  );
}

export default About;
