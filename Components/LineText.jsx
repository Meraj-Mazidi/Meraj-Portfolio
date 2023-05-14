import React from "react";

const LineText = ({ text }) => {
  return (
    <span className="flex items-center gap-2 -mb-5">
      <span className="h-[0.5px] w-28 bg-white" />
      <p className=" text-pink text-base">{text}</p>
    </span>
  );
};

export default LineText;
