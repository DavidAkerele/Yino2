import React from "react";
import "../App.css";
import { FaSpotify, FaSnapchatGhost } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import whiteLogo from "../assets/whitelogo.png";
import yino from "../assets/image.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col  h-screen lg:mt-0 lg:max-h-screen  lg:flex-row justify-center items-center  w-full overflow-hidden"
    >
      {/* Left Content */}
      <div className="home-left flex-1 flex flex-col justify-center items-center mt-4 gap-6 text-center md:text-left p-6">
        <img
          src={whiteLogo}
          alt="Logo"
          className="w-3/4 mb-4 sm:w-2/4 md:w-3/4"
        />
        <p className="text-[#9d5a4d] text-lg text-center sm:text-xl md:text-2xl font-semibold">
          I'm a <span className="font-bold">Multi-Disciplinary Artist</span>,
          <br />
          and an all-round{" "}
          <span className="font-bold">Creative Consultant</span>
        </p>
        <Link
          to="/contact"
          className="bg-[#f6f1ee] text-[#9d5a4d] px-6 py-2 rounded-full font-bold text-lg hover:bg-[#9d5a4d] hover:text-white transition-all mt-6"
        >
          GET IN TOUCH!
        </Link>

        <div className="flex justify-center lg:justify-start mt-6 gap-4 text-white">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b27d4a] transition-all"
          >
            <BsTwitter size={30} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b27d4a] transition-all"
          >
            <BsInstagram size={30} />
          </a>
          <a
            href="https://snapchat.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b27d4a] transition-all"
          >
            <FaSnapchatGhost size={30} />
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b27d4a] transition-all"
          >
            <FaSpotify size={30} />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 justify-center overflow-hidden items-center bg-cover bg-center">
        <img src={yino} alt="Yino" className="w-full  rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Home;
