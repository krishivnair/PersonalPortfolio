import React from "react";
import ProfilePicture from "../assets/ProfilePicture.jpeg";
const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="mb-6">
        <img
          src={ProfilePicture}
          alt="ProfilePicture"
          className="w-[500px] h-64 rounded-full shadow-md shadow-yellow-100 md:hover:shadow-green-200"
        ></img>
      </div>
      <div className="font-extrabold text-[#E5E5E5] text-center text-[50px]">
        Hi! I'm Krishiv Nair an aspiring
      </div>
    </div>
  );
};

export default Hero;
