import React from "react";

const CustomButton = ({ text, href, target, customClass, disabled }) => {
  return (
    <a href={href} target={target}>
      <button
        type="button"
        className={`px-6 sm:px-4 xl:px-6 py-4 w-full md:w-56 2xl:w-60 text-base h-25 transition-all rounded overflow-hidden border-2 hover:shadow-light-xl hover:outline-none hover:border-pink focus:outline-none font-poppins font-bold bg-pink text-blue hover:text-pink hover:bg-transparent border-transparent ${customClass} ${
          disabled && "!cursor-not-allowed"
        }`}
      >
        {text}
      </button>
    </a>
  );
};

export default CustomButton;
