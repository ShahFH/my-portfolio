import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#171717] mt-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-[28px]">ShahFaisal</span>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4 text-[18px]">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white" spy={true} smooth={true} offset={50} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#About" className="text-gray-300 hover:text-white" spy={true} smooth={true} offset={50} duration={500}>
                  About
                </Link>
              </li>
              <li className="relative">
                <Link to="#Skills" className="text-gray-300 hover:text-white" spy={true} smooth={true} offset={50} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="relative">
                <Link to="#Projects" className="text-gray-300 hover:text-white" spy={true} smooth={true} offset={50} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#Contact" className="text-gray-300 hover:text-white" spy={true} smooth={true} offset={50} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    className="hidden"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  />
                ) : (
                  <path
                    className="block"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li>
            <Link to="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="#About" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" spy={true} smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="#Skills" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" spy={true} smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="#Projects" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" spy={true} smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="#Contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700" spy={true} smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
