import React from "react";
import { FaMusic, FaSnapchatGhost } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Writing = () => {
  // Writing items data
  const writingItems = [
    {
      title: "Writing Item 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.",
    },
    {
      title: "Writing Item 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.",
    },
    {
      title: "Writing Item 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.",
    },
  ];

  return (
    <div id="writing" className="w-full pt-4  min-h-screen bg-[#e6dad1] bg-center z-20">
      <div className="w-[90%] mx-auto flex flex-col h-screen justify-center">
        <h2 className="text-xl text-[#9d5a4d] mb-12">Writing</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {writingItems.map((item, index) => (
            <div
              key={index}
              className="writing-item bg-[#00bf63] h-[500px] rounded-2xl overflow-hidden text-center p-7 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-white">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="lets-talk-button font-bold mt-6 text-center text-[#00bf63]">
          Let's Talk Writing
        </div>

        <div className="flex justify-center mt-8 gap-6 text-white">
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
