import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 p-4 text-white w-full h-screen"
    >
      <div className="flex flex-col p-4 justify-center h-full max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form belkow to get in touch with me</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <form
            action="https://getform.io/f/39f187c0-f6d2-4a4e-9bf9-7e6310ee2f98"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className=" my-4 bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message"
              className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
