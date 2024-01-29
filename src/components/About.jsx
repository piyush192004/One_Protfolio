import React from "react";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
          voluptas numquam ipsam unde officia, incidunt ad quasi voluptatum at
          repellendus! Et eum, vero reprehenderit autem accusantium similique
          omnis illo quam repellendus sint nulla optio tempora. Qui voluptatum
          id omnis, odit consequatur dolorem at tenetur error a obcaecati
          maiores consequuntur ad?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          vitae dignissimos repudiandae! Ut molestias quibusdam debitis enim
          atque? Distinctio, molestias eaque? Eveniet, laudantium cupiditate
          aliquid maiores repellendus obcaecati voluptate cumque voluptas
          debitis corporis aut temporibus molestias repudiandae sunt dolorem
          non, at quae ab quisquam numquam praesentium minima maxime. Eligendi,
          doloremque!
        </p>
      </div>
    </div>
  );
};

export default About;
