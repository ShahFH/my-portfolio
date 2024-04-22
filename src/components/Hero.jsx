import React, { useEffect } from 'react';
import Astronot from './AnimationJsonFiles/cute-astronaut-operating-laptop.json'
import Lottie from "lottie-react";
import WavyText from './context/WavyText.js'
import { motion } from 'framer-motion';

const imgVariants = {
  hidden: { opacity: 0, y: -80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

function Hero() {
  return (
    <div id='Home' className="flex flex-col md:flex-row-reverse lg:flex-row-reverse items-center max-w-screen-xl mt-0 mx-auto py-16 px-10 gap-4 md:gap-6 sm:gap-4 lg:py-16 h-[100vh] max-xl:h-max">
    <motion.div variants={imgVariants} className="lg:w-5/12 px-8 mb-12 md:p-0">
        {/*<img className="w-full h-auto" src="heroImg.png" alt="bgImg" />*/}
        <Lottie animationData={Astronot} loop={true}/>
      </motion.div>
      <div className="text-center md:text-left lg:text-left">
      <WavyText className="max-w-2xl mb-4 tracking-tight leading-none md:text-5xl xl:text-6xl text-white text-4xl font-bold"
        text="Hi, I'm" replay/>
        <WavyText className="max-w-2xl mb-4 tracking-tight leading-none md:text-5xl xl:text-6xl text-white text-4xl font-bold" text="Shah Faisal Hamdard" replay/>
      

        <p className="max-w-2xl mb-6 text-gray-400 text-lg lg:text-xl font-light">
          Full-Stack Software Developer
        </p>
        <motion.button 
          animate={{ x: [0, -20, 20, -20, 20, 0] }}
          transition={{ delay: 1 }}
          className="w-36 h-12 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md text-white text-sm font-bold">
          <a href="https/web.com" download>Download CV</a>
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;
