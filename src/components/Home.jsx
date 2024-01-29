import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl text-bold text-white">
            I'm an aspiring Full Stack Developer{" "}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have been previously doing the Front End Development and after
            which I decided to shift to Full Stack using React and currently I
            am covering the basic concpets of React and soon I will be a Full
            Stack Developer. The technologies I am familiar with are HTML5, CSS,
            Js, Tailwind, React.
          </p>
          <div>
            <ScrollLink
              to="portfolio"
              smooth
              duration={500}
              className=" group backdrop:text-white  w-fit px-6 py-3 my2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </ScrollLink>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
