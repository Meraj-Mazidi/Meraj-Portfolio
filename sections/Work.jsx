import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { LineText } from "../Components";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="w-full px-6 md:pr-0 md:pl-10 lg:pl-32 xl:container xl:mx-auto mt-[100px]" id="work" ref={ref}>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 relative">
        <img
          src={"images/vectors/ellipse.svg"}
          alt="Elipse"
          width={500}
          className="absolute -left-32 top-0 md:-bottom-[40%] rotate-180 blur-md"
        />
        {/* Left Side */}
        <div
          className="md:col-span-2 lg:col-span-1 h-full flex flex-col gap-5 py-5 font-poppins relative"
          style={{
            transform: isInView ? "none" : "translateX(-1000px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {/* Boxes */}
          <img
            src={"images/vectors/boxes.svg"}
            alt="Boxes"
            width={250}
            height="auto"
            className="absolute -right-5 lg:right-12 -top-8 lg:top-5"
          />
          <LineText text="What does he do?" />
          <p className="text-white font-base text-3xl md:w-[80%] leading-9">
            Currently working on a traveling and sports company called{" "}
            <span className="text-pink font-bold underline">Moverii</span>, as a
          </p>

          <span className="flex flex-col">
            <p className="text-white font-extrabold text-5xl md:text-7xl md:w-[80%] font-poppins mb-8">
              Front-end Developer
            </p>

            <Link href="/projects/moverii">
              <div
                className={`px-6 sm:px-4 xl:px-6 py-4 w-full md:w-fit text-base h-25 transition-all rounded overflow-hidden border-2 hover:shadow-light-xl hover:outline-none hover:border-pink focus:outline-none font-poppins font-bold z-10 bg-pink text-blue hover:text-pink hover:bg-transparent border-transparent cursor-pointer flex justify-center md:justify-start`}
              >
                <span className="flex gap-2 items-center hover:gap-8 transition-all duration-200">
                  <p className="flex items-center gap-1">
                    Learn More about Moverii
                  </p>
                  <BsArrowRight className="text-xl" />
                </span>
              </div>
            </Link>
          </span>

          {/* Arrow Right */}
          <img
            src={"images/vectors/arrows-right.svg"}
            alt="arrow"
            width={40}
            className="absolute -bottom-5 md:bottom-0 right-28 animate-translateright"
          />
        </div>

        {/* Right Side */}
        <div
          className="col-span-1 flex items-center justify-center pr-10 relative mt-20 md:mt-0"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img
            src={"images/companies/headout.svg"}
            alt="Ballon"
            width={380}
            className="z-20 -mr-10 md:mr-0"
          />
          <img
            src={"images/vectors/circle-spin.svg"}
            alt="CircleSpin"
            width={380}
            className="absolute -right-[50%] lg:-right-[35%] animate-spin z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
