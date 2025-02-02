import React from "react";
import { FaSoundcloud, FaSpotify } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

import musicImage1 from "../assets/musicimg/musicImage1.jpg";
import musicImage2 from "../assets/musicimg/musicImage2.jpg";
import musicImage3 from "../assets/musicimg/musicImage3.jpg";
import musicImage4 from "../assets/musicimg/musicImage4.jpg";
import musicImage5 from "../assets/musicimg/musicImage5.jpg";
import musicImage6 from "../assets/musicimg/musicImage6.jpg";
import musicImage7 from "../assets/musicimg/musicImage7.jpg";
import musicImage8 from "../assets/musicimg/musicImage8.jpg";
import musicImage9 from "../assets/musicimg/musicImage9.jpg";
import musicImage10 from "../assets/musicimg/musicImage10.jpg";
import musicImage11 from "../assets/musicimg/musicImage11.jpg";
import musicImage12 from "../assets/musicimg/musicImage12.jpg";
import musicImage13 from "../assets/musicimg/musicImage13.jpg";
import musicImage14 from "../assets/musicimg/musicImage14.jpg";
import musicImage15 from "../assets/musicimg/musicImage15.jpg";
import musicImage16 from "../assets/musicimg/musicImage16.jpg";
import musicImage17 from "../assets/musicimg/musicImage17.jpg";
import musicImage18 from "../assets/musicimg/musicImage18.jpg";
import creditImage1 from "../assets/producerimg/creditImage1.jpg";
import creditImage2 from "../assets/producerimg/creditImage2.jpg";
import creditImage3 from "../assets/producerimg/creditImage3.jpg";
import creditImage4 from "../assets/producerimg/creditImage4.jpg";
import creditImage5 from "../assets/producerimg/creditImage5.jpg";
import creditImage6 from "../assets/producerimg/creditImage6.jpg";
import creditImage7 from "../assets/producerimg/creditImage7.jpg";
import creditImage8 from "../assets/producerimg/creditImage8.jpg";
import creditImage9 from "../assets/producerimg/creditImage9.jpg";
import creditImage10 from "../assets/producerimg/creditImage10.jpg";
import creditImage11 from "../assets/producerimg/creditImage11.jpg";
import creditImage12 from "../assets/producerimg/creditImage12.jpg";

const musicImages = [
  musicImage1,
  musicImage2,
  musicImage3,
  musicImage4,
  musicImage5,
  musicImage6,
  musicImage7,
  musicImage8,
  musicImage9,
  musicImage10,
  musicImage11,
  musicImage12,
  musicImage13,
  musicImage14,
  musicImage15,
  musicImage16,
  musicImage17,
  musicImage18,
];

const creditImages = [
  creditImage1,
  creditImage2,
  creditImage3,
  creditImage4,
  creditImage5,
  creditImage6,
  creditImage7,
  creditImage8,
  creditImage9,
  creditImage10,
  creditImage11,
  creditImage12,
];

const Music = () => {
  return (
    <div
      id="music"
      className="bg-[#bfcbd8] bg-center gap-16 flex flex-col  z-30 mx-auto h-auto pt-28 pb-4"
    >
      <h2 className="text-[#4a7cb2] w-[95%] uppercase mx-auto mb-8 text-4xl font-bold">
        Music
      </h2>
      <div className="w-full mx-auto lg:w-[95%] lg:flex justify-between items-center gap-4 ">
        <div className="music-grid-container w-full lg:w-[70%] max-h-[calc(100vh_-_200px)] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {musicImages.map((src, index) => (
            <div key={index} className="music-grid-item">
              <img
                src={src}
                alt={`Music Track ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        <div className="music-right px-6 lg:px-0 w-full lg:w-[40%] h-auto flex flex-col gap-6 mt-6 lg:mt-0">
          <iframe
            src="https://open.spotify.com/embed/album/2xpgb8R0BXVS2e1XnXI9xZ?utm_source=generator"
            width="100%"
            height="619"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full rounded-2xl"
          ></iframe>

          <div className="lets-talk-button font-bold mt-4 text-center cursor-pointer hover:text-[#b27d4a]">
            Let's Talk Music
          </div>

          <div className="flex justify-center gap-2 text-white mt-4">
            <div className="hover:text-[#b27d4a] transition-all">
              <BsTwitter size={30} />
            </div>
            <div className="hover:text-[#b27d4a] transition-all">
              <BsInstagram size={30} />
            </div>
            <div className="hover:text-[#b27d4a] transition-all">
              <FaSpotify size={30} />
            </div>
            <div className="hover:text-[#b27d4a] transition-all">
              <FaSoundcloud size={30} />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[#4a7cb2] w-[95%] uppercase mx-auto mb-8 text-4xl font-bold">
        Producer Credits
      </h2>
      <div className="w-full mx-auto lg:w-[95%] lg:flex justify-between items-center gap-4">
        <div className="music-grid-container w-full lg:w-[70%] max-h-[calc(100vh_-_200px)] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {creditImages.map((src, index) => (
            <div key={index} className="music-grid-item">
              <img
                src={src}
                alt={`Music Track ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        <div className="music-right px-6 lg:px-0 w-full lg:w-[40%] h-auto flex flex-col gap-6 mt-6 lg:mt-0">
          <iframe
            src="https://open.spotify.com/embed/album/2xpgb8R0BXVS2e1XnXI9xZ?utm_source=generator"
            width="100%"
            height="619"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full rounded-2xl"
          ></iframe>

          <div className="lets-talk-button font-bold mt-4 text-center cursor-pointer hover:text-[#b27d4a]">
            Let's Talk Music
          </div>

          <div className="flex justify-center gap-2 text-white mt-4">
            <div className="hover:text-[#b27d4a] transition-all">
              <BsTwitter size={30} />
            </div>
            <div className="hover:text-[#b27d4a] transition-all">
              <BsInstagram size={30} />
            </div>
            <div className="hover:text-[#b27d4a] transition-all">
              <FaSpotify size={30} />
            </div>
            <div className="hover:text-[#b27d4a] transition-all">
              <FaSoundcloud size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
