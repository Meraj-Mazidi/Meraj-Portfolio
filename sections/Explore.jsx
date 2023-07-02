import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { LineText } from "../Components";

const Explore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="w-screen px-6 md:pr-5 md:pl-10 lg:pl-32  xl:container xl:mx-auto my-10 mb-48 relative mt-[100px] xl:mt-[200px]"
      id="explore"
      ref={ref}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-y-10">
        {/* Left Side */}
        <div
          className=" h-full flex flex-col gap-5 py-5 font-poppins"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <LineText text="What does he Know?" />
          <p className="lg:w-[55%] text-white text-2xl">
            He creates elegant, logical web and mobile app solutions. In his
            hobby time, he designs.
          </p>

          <p className="text-white font-extrabold text-7xl w-[70%]">
            Think. <span className="text-pink">Code.</span> Debug.
          </p>
        </div>

        {/* Right Side */}
        <div
          className="relative md:!scale-75  md:-ml-7 lg:ml-0 lg:!scale-100 mt-10 md:mt-0"
          style={{
            transform: isInView ? "none" : "translateX(1000px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img
            src={"images/vectors/cylinder.svg"}
            alt="circle"
            className="absolute top-0 right-0 animate-absoluteright z-10"
          />

          {/* Skills - Logo */}
          <div className="flex flex-col gap-5 justify-center items-center py-5 z-20">
            <span className="flex gap-10 items-center justify-center flex-wrap md:flex-nowrap">
              <img src={"images/skills/html.svg"} alt="HTML" width={70} height="auto" />
              <img src={"images/skills/css.svg"} alt="CSS" width={50} height="auto" />
              <img src={"images/skills/js.svg"} alt="JS" width={60} height="auto" />
              <img src={"images/skills/react.svg"} alt="Reactjs" width={140} height="auto" />
            </span>

            <span className="flex gap-10 items-center justify-center flex-wrap md:flex-nowrap">
              <img src={"images/skills/nextjs.svg"} alt="Nextjs" width={120} height="auto" />
              <img src={"images/skills/tailwindcss.svg"} alt="Tailwind" width={200} height="auto" />

              <img src={"images/skills/git.svg"} alt="" width={100} height="auto" />
            </span>

            <span className="flex gap-10 items-center justify-center flex-wrap md:flex-nowrap">
              <img src={"images/skills/redux.svg"} alt="Redux" width={60} height="auto" />
              <img src={"images/skills/GraphQL.svg"} alt="GraphQl" width={180} height="auto" />
              <img src={"images/skills/es6.svg"} alt="Es6" width={60} height="auto" />
              <img
                src={"images/skills/Materialize-CSS-01.svg"}
                alt="Materialize"
                width={80}
              />
            </span>

            <span className="flex gap-10 items-center justify-center flex-wrap md:flex-nowrap">
              <img src={"images/skills/ux.png"} alt="UiUx" width={80} height="auto" />
              <img src={"images/skills/figma.svg"} alt="Figma" width={40} height="auto" />
              <img
                src={"images/skills/responsive-design.png"}
                alt="Responsive"
                width={90}
                height="auto"
              />
              <img src={"images/skills/english.png"} alt="English" width={75} height="auto" />
            </span>
          </div>
        </div>
      </div>

      <img
        src={"images/vectors/l-vector.svg"}
        alt="circle"
        className="w-[400px] lg:w-1/3 absolute lg:right-[35%] -bottom-10 lg:-bottom-1/4"
      />
    </section>
  );
};

export default Explore;
