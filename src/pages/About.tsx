import React from "react";
import image from '../assets/about.jpg'

const thingsIAm = [
  {
    title: "Producer",
    description:
      "Making beats and crafting the sounds for some of your favourite artists and songs. ",
  },
  {
    title: "Photographer",
    description:
      "I have been taking pictures since I was 12 and have since developed a keen eye for detail and composition.",
    },
    {
      title: "Composer",
      description:
        "Producing memorable instrumental songs and pieces to soundtrack our lives or visual media.",
    },
  {
    title: "Writer",
    description:
      "I have written several poems, short stories, and essays that have been published in various magazines and newspapers.",
  },
  {
    title: "ARCHITECT",
    description:
      "Designing spaces and spatial solutions to meet our functional and aesthetic needs. ",
  },
  {
    title: "CREATIVE DIRECTOR",
    description:
      "Combining a wealth of creative techniques and mutual understanding to help realize diverse creative intentions. ",
  },
];

const About = () => {
  return (
    <div id="about" className="min-h-screen mx-auto flex flex-col-reverse gap-6 lg:flex-row bg-[#9d5a4d]  px-6 pb-8 lg:pb-0">
      {/* Left Content */}
      <div className="about-left flex flex-col justify-center lg:w-1/2 text-white">
        <h2 className="font-semibold text-4xl sm:text-5xl">ABOUT ME ...</h2>
        <p className="mt-4 text-lg sm:text-xl">
          I was born and raised in Lagos, Nigeria to a family that appreciated
          all facets of the arts and so I dabbled in most of them as a child. By
          the age of 10, I had begun to write, draw, paint, play instruments,
          play sports, act, and even design different things. As I grew older,
          those interests grew with me and I deepened my knowledge, passion, and
          expertise by constant learning and practice.
        </p>

        <h2 className="font-semibold text-2xl sm:text-3xl mt-8">I'M A ...</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          {thingsIAm.map((item, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-medium text-xl uppercase sm:text-2xl text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="about-right sm:w-1/2 mt-8 h-[50%]  sm:mt-0 flex justify-center items-center">
        <img
          src={image}
          alt="Person"
          className="w-full lg:w-auto h-[80%] lg:max-h-screen lg:h-1/2 object-fit rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
