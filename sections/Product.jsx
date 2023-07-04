import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { LineText, ProductCards } from "../Components";

const Product = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="w-full px-6 md:pr-3 md:pl-10 lg:pl-32 xl:container xl:mx-auto mt-[100px] pro"
      ref={ref}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 relative pro2">
        <img
          src={"images/vectors/boxes.svg"}
          alt="Boxes"
          width={800}
          className="absolute -right-32 -bottom-[140%] lg:top-1/2 rotate-45 blur-sm pro3"
        />
        {/* Left Side */}
        <div
          className="h-full flex flex-col gap-5 py-5 font-poppins relative pro4"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {/* Boxes */}
          <img
            src={"images/vectors/boxes.svg"}
            alt="Boxes"
            width={230}
            className="absolute right-[25%] top-5 hidden lg:block pro5"
          />
          <LineText text="Let’s walk the talk!" />
          <p className="text-white font-base text-3xl md:w-[85%] lg:w-[50%] leading-8">
            Some awesome <span className="text-pink font-bold">Products</span>{" "}
            for the awesome people
          </p>

          <p className="text-white font-extrabold text-5xl lg:text-7xl lg:w-[60%] mb-20 lg:mb-8">
            Something he has <span className="text-pink font-bold">built</span>
          </p>

          <img
            src={"images/vectors/arrows-right.svg"}
            alt="Arrow"
            width={45}
            className="absolute right-1/2 lg:right-16 rotate-90 lg:bottom-0 animate-translateBounce"
          />
        </div>

        {/* Right Side */}
        <div
          className="px-5 h-full mt-32 md:mt-0 w-full cards pro6"
          style={{
            transform: isInView ? "none" : "translateX(1000px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <ProductCards />
        </div>
      </div>
    </section>
  );
};

export default Product;
