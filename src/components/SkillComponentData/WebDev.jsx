import React from 'react';
import HTML from '../Icons/html.png'
import CSS from '../Icons/CSS.png'
import Tailwind from '../Icons/tailwind.png'
import SASS from '../Icons/sass.png'
import ReacT from '../Icons/React.png';
import NextJs from '../Icons/nextjs.png'
import Reduxee from '../Icons/redux.png'
import Express from '../Icons/Express.js.png'

import GraphQL from '../Icons/graphql.png'
import MySQL from '../Icons/mysql.png'
import NodeJS from '../Icons/nodejs.png'
import Djangoo from '../Icons/django.png'



const iconDev = [
  {
    icon: HTML,
    title: 'HTML',
    description: 'HTML/CSS'
  },
  {
    icon: CSS,
    title: 'CSS',
    description: 'HTML/CSS'
  },
  {
    icon: Tailwind,
    title: 'Tailwind',
    description: 'CSS'
  },
  {
    icon: SASS,
    title: 'SASS',
    description: 'CSS'
  },

  {
    icon: ReacT,
    title: 'React',
    description: 'javaScript'
  },
  {
    icon: NextJs,
    title: 'Next.js',
    description: 'javaScript'
  },
  {
    icon: Reduxee,
    title: 'Reduxe',
    description: 'javaScript'
  },
  {
    icon: Express,
    title: 'Express.js',
    description: 'javaScript'
  },

  {
    icon: GraphQL,
    title: 'GraphQL',
    description: 'Query API'
  },
  {
    icon: MySQL,
    title: 'MySQL',
    description: 'Database'
  },
  {
    icon: NodeJS,
    title: 'NodeJS',
    description: 'javaScript'
  },
  {
    icon: Djangoo,
    title: 'Django',
    description: 'Python'
  },

  
];

export default function WebDev() {
  return (
    <div className='flex flex-wrap justify-center'>
      {iconDev.map((item, index) => (
        <div key={index} className='px-5 py-5.5 mb-6 flex justify-center items-center w-full sm:w-1/2 md:w-1/4'>
          <img className='mr-4' src={item.icon} alt={item.title} />
          <div>
            <span className='text-4 font-bold'>{item.title}</span>
            <p className='text-neutral-400 text-[14px]'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
