import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 flex items-center mx-auto ">
        As a M.E.R.N. stack developer, I am passionate about crafting high-quality, user-friendly applications that solve real-world problems. 
        With experience in both front-end and back-end development, I am able to bring a holistic perspective to my work, ensuring seamless integration between all components of the application.
        </p>
        <br/>

        <p className="text-xl mt-20 flex items-center mx-auto ">
        Currently pursuing a Bachelor's degree in Computer Science, I am committed to staying up-to-date with the latest developments in the field, constantly seeking out new challenges and opportunities to expand my knowledge and skill set. 
        In addition to my technical skills, I possess strong communication and collaboration abilities, working effectively both independently and as part of a team.
        My dedication to delivering high-quality work, attention to detail, and ability to manage multiple priorities make me a valuable asset to any project.
        </p>
       
      </div>
    </div>
  );
};

export default About;