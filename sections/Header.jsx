import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { LineText } from "../Components";
import moment from "moment";

const btnData = [
  {
    text: `Check out Resume`,
    path: "/meraj-resume",
    target: "_self",
    customClass:
      "bg-pink text-blue hover:text-pink hover:bg-transparent border-transparent md:!mr-3",
  },
  {
    text: `Let's Connect`,
    path: "/connect",
    target: "_self",
    customClass: "text-pink border-pink hover:bg-pink hover:text-blue",
  },
  {
    text: `More about Meraj`,
    path: "/who-is-Meraj/",
    target: "_self",
    customClass:
      "text-pink border-pink hover:bg-pink hover:text-blue md:col-span-full !w-full",
  },
];

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <header
      className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 mb-10 px-6 md:pr-0 md:pl-10 lg:pl-32 xl:container xl:mx-auto"
      id="home"
      ref={ref}
    >
      {/* Left Side */}
      <div
        className="col-span-1 md:col-span-2 lg:col-span-1 py-5 pt-5 flex flex-col gap-3 relative lg:mt-5 xl:mt-20"
        style={{
          transform: isInView ? "none" : "translateX(-1000px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {/* Moving Shape */}
        <img
          src={"images/vectors/triangle.svg"}
          alt="triangle"
          className="absolute right-[20px] lg:right-36 xl:right-0 top-16 w-20 animate-spin"
        />

        <LineText text="Who is He?" />

        <h1 className="text-white text-7xl font-extrabold w-[80%]">
          Meraj Mazidi
        </h1>

        <p className="md:w-[80%] text-violet text-base font-medium font-poppins">
          I'm a {moment("1998-04-21", "YYYY-MM-DD").fromNow(true)} old
          self-taught Fronted-developer who absolutely LOVES to Code, Create &
          Design websites and applications. I'm a JS guy, who happens to adore
          React/Next! I just love exploring new things and learn new
          technologies in the process. Energetic and a great team player who in
          every opportunity, looks to find some new friends. <br /> Wanna share
          something? Let's get in touch! ;)
        </p>

        <div className="pt-5 grid grid-cols-1 md:grid-cols-2 !gap-3 mb-6 md:mb-0 md:max-w-[80%] lg:max-w-[70%]">
          {btnData.map((btn, i) => (
            <a
              key={i}
              href={btn.path}
              target={btn.target}
              className={`px-6 sm:px-4 xl:px-6 py-4 w-full text-base transition-all rounded overflow-hidden border-2 hover:shadow-light-xl hover:outline-none hover:border-pink focus:outline-none font-poppins font-bold z-10 text-center ${btn.customClass}`}
            >
              {btn.text}
            </a>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full col-span-1 relative">
        <img
          src={"images/vectors/ellipse.svg"}
          alt="ellipse"
          width={450}
          className="absolute md:top-[10%] lg:bottom-0 right-0"
        />
        <img
          src={"images/bob.png"}
          alt="Bob"
          width={450}
          className="md:absolute md:top-[20%] bottom-0 md:right-5 lg:right-14 z-10 pt-14 md:pt-0"
        />
      </div>
    </header>
  );
};

export default Header;
