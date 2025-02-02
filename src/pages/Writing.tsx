import React from "react";
import { FaMusic, FaSnapchatGhost } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Writing = () => {
  const writingItems = [
    {
      title: "Writing Item 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.",
    },
    {
      title: "Writing Item 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.",
    },
    {
      title: "Writing Item 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.",
    },
  ];

  return (
    <div
      id="writing"
      className="w-full min-h-screen bg-[#e6dad1] flex items-center py-16"
    >
      <div className="w-[90%] mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-[#9d5a4d] font-semibold mb-8 md:mb-12">
          Writing
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {writingItems.map((item, index) => (
            <div
              key={index}
              className="writing-item bg-[#00bf63] min-h-[450px] rounded-2xl text-center p-6 flex flex-col justify-center items-center"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white max-w-[85%] mx-auto">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 md:mt-10 text-[#00bf63] font-bold text-lg cursor-pointer hover:text-[#b27d4a] transition">
          Let's Talk Writing
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-6 md:mt-8 gap-4 md:gap-6 text-white">
          <div className="hover:text-[#b27d4a] transition-all">
            <BsTwitter size={30} />
          </div>
          <div className="hover:text-[#b27d4a] transition-all">
            <BsInstagram size={30} />
          </div>
          <div className="hover:text-[#b27d4a] transition-all">
            <FaSnapchatGhost size={30} />
          </div>
          <div className="hover:text-[#b27d4a] transition-all">
            <FaMusic size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writing;
