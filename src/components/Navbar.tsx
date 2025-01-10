import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/whitelogo.png";

import about from '../assets/about-svgrepo-com.svg';
import music from '../assets/music-svgrepo-com.svg';
import writing from '../assets/writing-svgrepo-com.svg';
import photo from '../assets/photography-camera-outline-svgrepo-com.svg';
import contact from '../assets/contact-svgrepo-com.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "about", name: "About", path: "/about", icon: about, activeColor: "bg-[#9d5a4d]" },
    { id: "music", name: "Music", path: "/music", icon: music, activeColor: "bg-[#bfcbd8]" },
    { id: "writing", name: "Writing", path: "/writing", icon: writing, activeColor: "bg-[#00bf63]" },
    { id: "photography", name: "Photography", path: "/photography", icon: photo, activeColor: "bg-black" },
    { id: "contact", name: "Contact", path: "/contact", icon: contact, activeColor: "bg-[#b27d4a]" },
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 top-2 lg:top-6 w-3/4 lg:w-full max-w-6xl bg-opacity-30 bg-black z-50 shadow-md flex items-center justify-between px-6 py-2 backdrop-blur-xl rounded-xl">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-4">
        <NavLink to="/" className={({ isActive }) =>
            `text-lg text-white py-2 px-4 rounded-md ${
              isActive
                ? "font-bold bg-transparent"
                : "hover:bg-transparent hover:text-white"
            } transition-all duration-300`
          }>
          <img src={logoImage} alt="Logo" className="w-20 object-contain" />
        </NavLink>
      </div>

      {/* Center - Navbar Links (Desktop) */}
      <ul className="hidden lg:flex justify-center items-center space-x-8 flex-1">
        {navItems.map((item) => (
          <li key={item.id} className="flex items-center justify-center space-x-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-lg text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 ${
                  isActive
                    ? `font-bold ${item.activeColor}`
                    : "hover:bg-black hover:text-white"
                } transition-all duration-300`
              }
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" /> 
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden flex items-center">
        <button className="text-white" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-64 rounded-xl left-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
          isMobileMenuOpen ? "block bg-black" : "hidden"
        }`}
      >
        <ul className="space-y-4 flex flex-col">
          {navItems.map((item) => (
            <li key={item.id} className="flex items-center justify-center space-x-2">
              <NavLink
                to={item.path}
                onClick={closeMenu} // Close the menu on item click
                className={({ isActive }) =>
                  `text-lg text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 ${
                    isActive
                      ? `font-bold ${item.activeColor}`
                      : "hover:bg-[#b27d4a] hover:text-white"
                  } transition-all duration-300 block`
                }
              >
                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
