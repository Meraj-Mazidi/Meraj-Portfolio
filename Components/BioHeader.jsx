import React from "react";
import { LineText, CustomButton } from "../Components";

// Gallery
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const BioHeader = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 md:gap-y-20 px-6 md:px-10 lg:pl-32 mb-10 xl:container xl:mx-auto lg:items-center me mt-5 xl:mt-10">
      {/* left Side */}
      <div className="flex flex-col gap-4 lg:mt-10">
        <LineText text="Who are you?" />
        <p className="text-white text-6xl lg:text-7xl font-extrabold w-[80%]">
          Meraj Mazidi
        </p>
        <p className="lg:w-[80%] text-violet text-base font-poppins mb-5">
          I'm a Front-end deveoper who specializes in React, Next.js, design,
          and Tailwind CSS, to be brief! <br />
          My deep passion of coding led me to this world, and I started learning
          coding all by myself and I'm pleased to announce that I'm a proud
          self-taught developer, who seeks the power of knowledge wherever I can
          find it. <br />
          I love working in teams and finding new friends in the process. Eager
          to dive straight into unknown world and challenges, just to come out
          stronger, more seasoned and experienced. <br />
          Also, I happen to possses a great sense of humer! :)
        </p>

        <span className="flex flex-col md:flex-row gap-4 z-10 who">
          <CustomButton
            text="Check out Resume"
            href="https://ibb.co/crtT7GD"
            target="_blank"
            customClass="!w-full md:!w-56 xl:!w-60 whoIsMerajBtn"
          />
          <CustomButton
            text="See my Images"
            href="/who-is-Meraj/Images/"
            target="_self"
            customClass="!w-full md:!w-56 xl:!w-60 whoIsMerajBtn"
          />
        </span>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-center z-10 mt-20 md:mt-0 lg:mt-2">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="lg:w-[90%] rounded-xl shadow-light-xl hover:shadow-light-3xl"
        >
          <a href={"/images/Bio/main.JPG"} className="w-full h-full">
            <img
              src={"/images/Bio/main.JPG"}
              alt="MerajMazidi"
              className="w-full rounded-xl object-cover object-center"
            />
          </a>
        </LightGallery>
      </div>
    </div>
  );
};

export default BioHeader;
