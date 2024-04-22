import React, { useState } from 'react';
import SoftDev from './SkillComponentData/SoftDev';
import WebDev from './SkillComponentData/WebDev'
import WebUi from './SkillComponentData/UIDesign'
import { motion } from "framer-motion"

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}


const SoftwareDevelopment = () => (
    <SoftDev />
);

const WebDevelopment = () => (
  <WebDev />
);

const WebUIDesign = () => (
  <WebUi />
);

function Skills() {
  const [activeTab, setActiveTab] = useState('software');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto relative m-30 lg:max-w-[1200px]" id='Skills'>
      <h1 className="text-center text-white text-4xl font-bold py-16">Skills</h1>
      <div className='flex justify-evenly  gap-2'>

      {/** Software Dev Component */}
      <FadeInWhenVisible>
        <div
          className={`text-neutral-600 bg-neutral-800 p-6 md:p-8 sm:p-8 hover:bg-gradient-to-r from-violet-600 to-indigo-600 cursor-pointer hover:text-white  ${activeTab === 'software' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('software')}
        >
          <img className='w-7 md:w-12 sm:w-9 pb-2 sm:pb-6' src='SDIcon.png' alt='icon' />
          <p className='text-2x1 sm:text-3xl md:text-4xl font-medium '>Software<br/>Development</p>
        </div>
        </FadeInWhenVisible>

        {/** Web Dev component */}
        <FadeInWhenVisible>
        <div
          className={`text-neutral-600 bg-neutral-800 p-6 md:p-8 sm:p-8 hover:bg-gradient-to-r from-violet-600 to-indigo-600 cursor-pointer hover:text-white ${activeTab === 'web' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('web')}
        >
          <img className='w-7 md:w-12 sm:w-9 pb-2 sm:pb-6' src='DevIcon.png' alt='icon' />
          <p className='text-2x1 sm:text-3xl md:text-4xl font-medium'>Web<br/>Development</p>
        </div>
        </FadeInWhenVisible>
        {/**UI/UX Design Component */}
        <FadeInWhenVisible>
        <div
          className={`text-neutral-600 bg-neutral-800 p-6 md:p-8 sm:p-8 hover:bg-gradient-to-r from-violet-600 to-indigo-600 cursor-pointer hover:text-white ${activeTab === 'design' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('design')}
        >
          <img className='w-7 md:w-12 sm:w-9 pb-2 sm:pb-6' src='DesignIcon.png' alt='icon' />
          <p className='text-2x1 sm:text-3xl md:text-4xl font-medium'>Web<br/>UI/UX Design</p>
        </div></FadeInWhenVisible>
      </div>


      <div className='mx-auto text-white max-w-[1195px] mb-10  py-24'>
        {activeTab === 'software' ? <SoftwareDevelopment /> : null}
        {activeTab === 'web' ? <WebDevelopment /> : null}
        {activeTab === 'design' ? <WebUIDesign /> : null}
      </div>
    </div>
  );
}

export default Skills;
