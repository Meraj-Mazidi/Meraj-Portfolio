import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { CustomButton } from "../Components";

const projects = [
  {
    slug: "moverii",
    coverImg: "images/projects/moverii.png",
  },
  {
    slug: "Next.js-Blog-App",
    coverImg: "images/projects/Next-JS-Blog.png",
  },
  {
    slug: "Financial-Dashboard",
    coverImg: "images/projects/Financial-Dashboard.png",
  },
  {
    slug: "Creative-Agency-LandingPage",
    coverImg: "images/projects/Next-Creative-Agency.png",
  },

  {
    slug: "Fitness-Landing",
    coverImg: "images/projects/FitClub.png",
  },

  {
    slug: "CryptoWorld",
    coverImg: "images/projects/CryptoWorld.png",
  },
  {
    slug: "Modern-Bank-Landing",
    coverImg: "images/projects/Modern-Bank.png",
  },
  {
    slug: "Last-Portfolio",
    coverImg: "images/projects/last-Portfolio.png",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="w-screen pl-10 lg:pl-32 xl:container xl:mx-auto mt-[400px] md:mt-[100px]" ref={ref}>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-evenly relative px-4 md:px-10 lg:px-0"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <img
          src={"images/vectors/cylinder.svg"}
          alt="circle"
          width={900}
          className="absolute top-1/3 right-0 blur-sm hidden lg:block"
        />
        {projects.map((item, i) => (
          <Tilt key={i} scale="1.1" transitionSpeed={5000}>
            <a href={`/projects/${item.slug}`}>
              <img
                src={item.coverImg}
                alt={item.slug}
                width="auto"
                height="auto"
                className="w-[450px] rounded-2xl hover:shadow-light-3xl"
              />
            </a>
          </Tilt>
        ))}
      </div>

      <span className="flex justify-center py-28">
        <CustomButton text="Show me More!" href="/projects" target="_self" />
      </span>
    </section>
  );
};

export default Projects;
