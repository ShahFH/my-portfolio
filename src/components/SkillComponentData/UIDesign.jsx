import React from 'react';
import Figma from '../Icons/Figma.png';
import Photoshop from '../Icons/PS.png'
import AdobeXD from '../Icons/Xd.png'
import Illustrator from '../Icons/Ai.png'

const iconDev = [
  {
    icon: Figma,
    title: 'Figma',
    description: 'UI/UX design'
  },
  {
    icon: AdobeXD,
    title: 'AdobeXD',
    description: 'UI/UX design'
  },
  {
    icon: Photoshop,
    title: 'Photoshop',
    description: 'UI/UX design'
  },
  {
    icon: Illustrator,
    title: 'Illustrator',
    description: 'UI/UX design'
  },
];

export default function UIDesign() {
  return (
    <div className='flex flex-wrap justify-center'>
      {iconDev.map((item, index) => (
        <div key={index} className='px-5 py-5.5 mb-6 flex justify-center items-center w-full sm:w-1/2 md:w-1/4'>
          <img className='w-10 h-10 mr-4' src={item.icon} alt={item.title} />
          <div>
            <span className='text-4 font-bold'>{item.title}</span>
            <p className='text-neutral-400 text-[14px]'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
