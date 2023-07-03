import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { LineText, CustomButton } from "../Components";

const Connect = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="w-full px-6 md:pl-10 lg:pl-32 xl:container xl:mx-auto mt-[100px]" ref={ref}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 relative">
        <img
          src={"images/vectors/circle-spin.svg"}
          alt="Circle"
          width={500}
          className="absolute md:-right-[30%] lg:right-[50px] bottom-0 md:bottom-38 blur-sm animate-spin"
        />
        {/* Left Side */}
        <div
          className="flex flex-col gap-5 font-poppins py-5 relative col-span-1"
          style={{
            transform: isInView ? "none" : "translateX(-1000px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <LineText text="Meet and Greet!" />
          <p className="md:w-[58%] text-white text-2xl">
            Impressed Already? <br /> <span className="text-pink">Schedule</span> a
            call with him.
          </p>

          <p className="text-white font-extrabold text-5xl lg:text-7xl md:w-[85%] lg:w-[70%]">
            Let’s grab a cup of coffee.
          </p>

          {/* Boxes */}
          <img
            src={"images/vectors/boxes.svg"}
            alt="boxes"
            width={230}
            className="absolute rotate-90 -right-5 lg:right-24 bottom-[70%] lg:bottom-56"
          />
        </div>

        {/* Right Side */}
        <div
          className="col-span-1 lg:pr-16 flex justify-center md:p-8"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img
            src={"images/vectors/contact.svg"}
            alt="ContactHand"
            width={450}
            height="auto"
          />
        </div>
      </div>

      <span
        className="flex justify-center lg:mr-28"
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <CustomButton text="Lets Connect" target="_self" href="/connect" />
      </span>
    </section>
  );
};

export default Connect;
