import React from 'react';
import Python from '../Icons/Python.png';
import JavaScript from '../Icons/JavaScript.png'
import CLanguage from '../Icons/C.png'
import Java from '../Icons/Java.png'

const iconDev = [
  {
    icon: Python,
    title: 'Python',
    description: 'Programming Language'
  },
  {
    icon: JavaScript,
    title: 'JavaScript',
    description: 'Programming Language'
  },
  {
    icon: CLanguage,
    title: 'C Language',
    description: 'Programming Language'
  },

];

export default function SoftDev() {
  return (
    <div className='flex flex-wrap justify-center'>
      {iconDev.map((item, index) => (
        <div
          key={index}
          className='px-5 mb-6 flex justify-center items-center w-full sm:w-1/2 md:w-1/4'
        >
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


