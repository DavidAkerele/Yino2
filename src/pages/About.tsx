import React from "react";
import image from '../assets/about.jpg';

const thingsIAm = [
  {
    title: "Producer",
    description:
      "Making beats and crafting the sounds for some of your favourite artists and songs.",
    link: "/music"
  },
  {
    title: "Photographer",
    description:
      "I have been taking pictures since I was 12 and have since developed a keen eye for detail and composition.",
    link: "/photography"
  },
  {
    title: "Composer",
    description:
      "Producing memorable instrumental songs and pieces to soundtrack our lives or visual media.",
    link: "/music"
  },
  {
    title: "Writer",
    description:
      "I have written several poems, short stories, and essays that have been published in various magazines and newspapers.",
    link: "/writing"
  },
  {
    title: "ARCHITECT",
    description:
      "Designing spaces and spatial solutions to meet our functional and aesthetic needs.",
    link: "/photography"
  },
  {
    title: "CREATIVE DIRECTOR",
    description:
      "Combining a wealth of creative techniques and mutual understanding to help realize diverse creative intentions.",
    link: "/photography"
  },
];

const About = () => {
  return (
    <div id="about" className="min-h-screen mx-auto items-center justify-center flex flex-col-reverse overflow-hidden gap-6 lg:flex-row bg-[#9d5a4d]  pb-8 lg:pb-0">
      {/* Left Content */}
      <div className="about-left flex flex-col mx-6  justify-center lg:w-1/2 text-white">
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
            <a key={index} href={item.link} className="bg-white/10 p-6 rounded-lg block">
              <h3 className="font-medium text-xl uppercase sm:text-2xl text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white">{item.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="about-right w-full  h-[100vh] sm:h-auto flex justify-center items-center">
        <img
          src={image}
          alt="Person"
          className="w-full object-cover lg:h-screen sm:h-auto sm:w-full sm:object-cover rounded-none sm:rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
