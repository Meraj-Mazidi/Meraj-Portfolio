import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { LineText, ContactCard } from "../Components";
import { HiArrowUp } from "react-icons/hi";

const Github = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="w-screen px-6 md:pl-0 md:pr-10 lg:pl-32 xl:container xl:mx-auto mt-[100px] mb-[80px] relative"
      ref={ref}
    >
      <img
        src={"images/vectors/circle-spin.svg"}
        alt="circle"
        width={500}
        className="absolute top-0 -left-[30%] lg:left-[30%] animate-spin"
      />
      <div
        className="w-full flex flex-col md:flex-row md:pl-10 lg:pl-0"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 font-poppins py-10">
          <LineText text="Like what you see?" />

          <p className="lg:w-[50%] text-white text-2xl">
            Loved this portfolio? <br /> Make this{" "}
            <span className="text-pink">yours</span> by forking.
          </p>

          <p className="text-white font-extrabold text-5xl lg:text-7xl md:w-[70%]">
            Visit Github Repository
          </p>

          <p className="text-white text-xs pt-5">
            *This Portfolio was created using Next.js and Tailwind CSS.
          </p>
          <p className="text-white text-xs -mt-4">
            *Feel free to check out my GitHub and get the source code of this
            Portfolio.
          </p>
        </div>

        {/* Right Side */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center lg:pr-10"
          style={{
            transform: isInView ? "none" : "translateX(1000px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <ContactCard />
        </div>
      </div>

      {/* Arrow up */}
      <a href="#home" className="absolute w-[50px] h-[50px] bg-violet rounded-full right-2 flex justify-center items-center animate-bounce shadow shadow-white cursor-pointer hover:bg-blue text-blue hover:text-white transition-all duration-300">
          <HiArrowUp className="text-3xl" />
      </a>
    </section>
  );
};

export default Github;
