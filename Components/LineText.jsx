import React from "react";

const LineText = ({ text }) => {
  return (
    <span className="flex items-center gap-2 -mb-5">
      <div className="!h-[0.6px] !w-28 !bg-white" />
      <p className=" text-pink text-base">{text}</p>
    </span>
  );
};

export default LineText;
