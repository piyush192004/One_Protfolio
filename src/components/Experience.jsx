import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: node,
      title: "Node.js",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the Technologies I've worked with..</p>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-4 gap-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 duration-500 ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
