import Slider from "react-slick";
import { motion } from "framer-motion";
import { FiGithub, FiLink } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';

const CardWrapper = ({ item }) => {
  return (
    <div className="p-8 text-white">
      <div className="w-full max-w-lg">
        <ThreeDHoverScreenCard item={item} />
      </div>
    </div>
  );
};

const ThreeDHoverScreenCard = ({ item }) => {
  return (
    <motion.div whileHover="hovered" className="cursor-pointer">
      <ScreenMock img={item.img} />
      <CardCopy title={item.title} description={item.description} githubLink={item.githubLink} liveDemoLink={item.liveDemoLink}/>
    </motion.div>
  );
};

const ScreenMock = ({ img }) => {
  return (
    // Light Gradient Background
    <motion.div
      variants={{
        hovered: {
          rotateY: "15deg",
          rotateX: "2.5deg",
          x: -10,
        },
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      transition={{
        duration: 0.35,
      }}
      className="w-full h-80 rounded-2xl p-4 bg-neutral-800"
    >
      {/* Browser Screen */}
      <div
        style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
        className="w-full h-full bg-slate-900 rounded-xl shadow-lg p-2 relative"
      >
        {/* Browser Buttons */}
        <div className="flex gap-1 mt-1 relative">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
        </div>
        {/* Browser Mockup */}
        <div
          style={{
            transformStyle: "preserve-3d",
          }}
          className="p-2 rounded-md absolute top-8 bottom-2 left-2 right-2 bg-slate-800 overflow-hidden"
        >
          <img className="cover-full" src={img} alt='profile img' />
        </div>
      </div>
    </motion.div>
  );
};
const CardCopy = ({ title, description, githubLink, liveDemoLink }) => {
  return (
    <div className="flex items-center mt-6">
      <motion.div
        variants={{
          hovered: {
            x: 0,
            opacity: 1,
          },
        }}
        style={{
          x: -40,
          opacity: 0,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <a href={githubLink} target="_blank" rel="noreferrer">
          <FiGithub className="text-2xl mr-4 mb-2" />
        </a>
        <a href={liveDemoLink} target="_blank" rel="noreferrer">
          <FiLink className="text-2xl mr-4" />
        </a>
      </motion.div>
      <motion.div
        variants={{
          hovered: {
            x: 0,
          },
        }}
        style={{
          x: -40,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <h4 className="text-2xl font-bold mb-1">{title}</h4>
        <span className="text-slate-400">{description}</span>
      </motion.div>
    </div>
  );
};

function Projects() {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  {/** Project Data */}
  const componentData = [
    {
      img: 'BRSRTIP.png',
      title: 'BgStrip',
      description: 'Component Description',
      githubLink: 'https://github.com/ShahFH/bgstrip',
      liveDemoLink: 'https://bgstrip.netlify.app/',
    },
    {
      img: 'path/to/image.jpg',
      title: 'Little Lemon',
      description: 'This project uses react tailwind',
      githubLink: 'https://github.com/user/repo',
      liveDemoLink: 'https://example.com',
    },
    {
      img: 'path/to/image.jpg',
      title: 'Xplore',
      description: 'This project uses react tailwind',
      githubLink: 'https://github.com/user/repo',
      liveDemoLink: 'https://example.com',
    },
  ];

  return (
    <div className="mx-auto relative" id='Projects'>
      <h1 className="text-center text-white text-4xl font-bold py-16">Projects</h1>

      {/* Card Component */}
      <div className="">
        <Slider className='max-w-[1195px] flex justify-center mx-auto' {...settings}>
          {componentData.map((item, index) => (
            <CardWrapper key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
