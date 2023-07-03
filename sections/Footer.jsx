import React from "react";
import { FaHeart } from "react-icons/fa";
import { BsEmojiWink, BsEmojiSmile } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full lg:pl-18 mb-5 flex gap-5 justify-center items-center relative">
      <span className="bg-violet w-1/3 h-[0.5px]" />
      <p className="flex items-center gap-2 font-poppins text-white whitespace-nowrap">
        <BsEmojiSmile className="text-xl animate-bounce" />
        Made with{" "}
        <span>
          <FaHeart className="text-red-500 animate-pulse text-lg" />
        </span>
        by{" "}
        <span className="font-bold text-pink border-b border-pink">
          Meraj Mazidi
        </span>{" "}
        <span>
          <BsEmojiWink className="text-xl animate-bounce" />
        </span>
      </p>
      <span className="bg-violet w-1/3 h-[0.5px]" />

      {/* Circle */}
      <img
        src={"images/vectors/cylinder.svg"}
        alt="circle"
        width={600}
        className="absolute bottom-0 -right-[30%] blur-lg"
      />
    </footer>
  );
};

export default Footer;
