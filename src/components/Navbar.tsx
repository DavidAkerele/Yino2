import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/whitelogo.png";
import about from '../assets/about-svgrepo-com.svg';
import music from '../assets/music-svgrepo-com.svg';
import writing from '../assets/writing-svgrepo-com.svg';
import photo from '../assets/photography-camera-outline-svgrepo-com.svg';
import contact from '../assets/contact-svgrepo-com.svg';

interface NavItem {
  id: string;
  name: string;
  path: string;
  icon: string;
  activeColor: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: "about", name: "About", path: "/about", icon: about, activeColor: "bg-[#9d5a4d]" },
    { id: "music", name: "Music", path: "/music", icon: music, activeColor: "bg-[#bfcbd8]" },
    { id: "writing", name: "Writing", path: "/writing", icon: writing, activeColor: "bg-[#00bf63]" },
    { id: "photography", name: "Photography", path: "/photography", icon: photo, activeColor: "bg-black" },
    { id: "architecture", name: "Architecture", path: "/architecture", icon: photo, activeColor: "bg-black" },
    { id: "contact", name: "Contact", path: "/contact", icon: contact, activeColor: "bg-[#b27d4a]" },
  ];

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const getNavLinkClass = (isActive: boolean, item: NavItem) => {
    return `text-lg text-white rounded-md flex items-center px-4 py-1 justify-center space-x-2 ${isActive ? `font-semibold ${item.activeColor}` : "hover:bg-opacity-70 hover:text-white"} transition-all duration-300`;
  };

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 lg:top-6 w-3/4 lg:w-[90%] max-w-7xl bg-opacity-30 backdrop-blur-lg bg-black z-50 shadow-xl rounded-xl flex items-center justify-between px-4 py-3">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-4">
        <NavLink to="/" className={({ isActive }) => `text-lg text-white px-4 rounded-md ${isActive ? "font-semibold bg-transparent" : "hover:bg-transparent hover:text-white"} transition-all duration-300`}>
          <img src={logoImage} alt="Logo" className="w-20 object-contain" />
        </NavLink>
      </div>

      {/* Center - Navbar Links (Desktop) */}
      <ul className="hidden lg:flex justify-center items-center space-x-8 flex-1">
        {navItems.map((item) => (
          <li key={item.id} className="flex items-center justify-center space-x-2">
            <NavLink
              to={item.path}
              className={({ isActive }) => getNavLinkClass(isActive, item)}
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden flex items-center ">
        <button className="text-white relative" onClick={toggleMenu}>
          <div
            className={`w-6 h-1 bg-white my-1 rounded-lg transition-all duration-300 transform ${isMobileMenuOpen ? "rotate-45 absolute top-0" : ""}`}
            style={{ transitionDelay: isMobileMenuOpen ? "0ms" : "150ms" }}
          />
          <div
            className={`w-6 h-1 bg-white my-1 rounded-lg transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            style={{ transitionDelay: isMobileMenuOpen ? "0ms" : "300ms" }}
          />
          <div
            className={`w-6 h-1 bg-white my-1 rounded-lg transition-all duration-300 transform ${isMobileMenuOpen ? "-rotate-45 absolute bottom-0" : ""}`}
            style={{ transitionDelay: isMobileMenuOpen ? "0ms" : "450ms" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-12 left-0 w-full z-50 py-4 transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} backdrop-blur-lg bg-black rounded-xl shadow-lg flex flex-col justify-between`}
      >
        <ul className="space-y-4 flex flex-col justify-center items-center">
          {navItems.map((item, index) => (
            <li key={item.id} className="flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105">
              <NavLink
                to={item.path}
                onClick={closeMenu} // Close the menu on item click
                className={({ isActive }) => getNavLinkClass(isActive, item)}
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
