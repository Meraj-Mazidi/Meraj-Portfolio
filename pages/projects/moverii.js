import React from "react";
import Head from "next/head";
import Tilt from "react-parallax-tilt";
import { LineText } from "../../Components";
import { MoveriiPreview } from "../../Components";
import { NextSeo } from "next-seo";

const btnData = [
  {
    text: `What is Moverii`,
    path: "https://moverii.de/about-us",
    target: "_blank",
    customClass:
      "bg-pink text-blue hover:text-pink hover:bg-transparent border-transparent",
  },
  {
    text: `Check out Moverii`,
    path: "https://moverii.de/",
    target: "_blank",
    customClass: "text-pink border-pink hover:bg-pink hover:text-blue",
  },
];

const moverii = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-icon.png" />
        <meta
          name="description"
          content="Meraj Mazidi Portfolio Page | Moverii project"
        />
        <meta
          name="keywords"
          content="Meraj Mazidi Portfolio, Moverii project"
        />
        <meta name="author" content="Meraj Mazidi" />
      </Head>

      <NextSeo
        title="Moverii Project"
        description="Meraj Mazidi Portfolio Page | Moverii Project"
        canonical="https://meraj.vercel.app/projects/"
        openGraph={{
          url: "https://meraj.vercel.app/moverii/projects/",
          title: "Meraj Mazidi",
          description: "Meraj Mazidi Portfolio Page | Moverii Project",
          siteName: "Meraj Mazidi",
          type: "website",
          locale: "en_US",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <section className="w-full h-full lg:pl-32 mb-10 xl:container xl:mx-auto parentEl">
        {/* Top part */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
          <img
            src={"/images/vectors/circle-spin.svg"}
            alt="circle"
            className="absolute -right-[40%] lg:-right-[30%] top-[50%] md:top-0 !z-0 animate-spin"
          />
          {/* Left side */}
          <div className="col-span-1 py-5 pt-5 flex flex-col gap-3 px-10 lg:px-0">
            <LineText text="But what is this?" />
            <p className="text-white text-7xl font-extrabold w-[80%]">
              Moverii
            </p>

            <p className="md:w-[80%] text-violet text-base font-poppins">
              Moverii is a fitness and traveling company, located in Germany. On
              moverii you will discover selected sports and active trips
              worldwide! No matter whether you are a beginner or a professional,
              surfing or hiking, adventure or relaxation - with them you will
              find the right sports/active trip for your needs. Experience your
              active dream vacation now!
            </p>

            <span className="pt-5 flex gap-3 flex-col md:flex-row mb-6 md:mb-0">
              {btnData.map((btn, i) => (
                <a
                  key={i}
                  href={btn.path}
                  target={btn.target}
                  className={`px-6 sm:px-4 xl:px-6 py-4 w-full md:w-56 2xl:w-60 text-base h-25 transition-all rounded overflow-hidden border-2 hover:shadow-light-xl hover:outline-none hover:border-pink focus:outline-none font-poppins font-bold z-10 text-center ${btn.customClass}`}
                >
                  {btn.text}
                </a>
              ))}
            </span>
          </div>

          {/* Right side */}
          <div className="w-full col-span-1 px-6 md:pr-10 lg:pr-6">
            <Tilt scale="1.1" transitionSpeed={5000}>
              <a href="https://moverii.de/" target="_blank">
                <img
                  src={"/images/projects/moverii.png"}
                  alt="moverii.de"
                  className="w-full lg:w-[600px] xl:w-full rounded-2xl hover:shadow-light-3xl "
                />
              </a>
            </Tilt>
          </div>
        </div>

        {/* middle content */}
        <div className="mt-[100px] mb-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {/* Left side */}
            <div className="col-span-1 py-5 pt-5 flex flex-col gap-3 order-2 md:order-1 px-6 md:pl-10 md:pr-0 z-10">
              <Tilt scale="1.1" transitionSpeed={5000}>
                <a href="https://moverii.de/surfcamps" target="_blank">
                  <img
                    src={
                      "/images/projects/moverii landing pages preview/Surfcamps.jpg"
                    }
                    alt="moverii.de"
                    className="md:w-[90%] lg:w-[500px] xl:w-full xl:-ml-10 rounded-2xl hover:shadow-light-3xl"
                  />
                </a>
              </Tilt>
            </div>

            {/* Right side */}
            <div className="w-full col-span-1 order-1 md:order-2 px-10 md:pr-10">
              <LineText text="What did you do?" />

              <p className="text-white text-5xl lg:text-7xl font-extrabold w-[80%] my-4 lg:my-3">
                Moverii.de
              </p>

              <p className="md:w-[80%] text-violet text-base font-poppins">
                I had the great honor & privilege of working with the awesome
                team of Moverii. I was working remotely on their incredible
                web-site to develop and create a beautiful & eye-catching master
                piece! I was employed as a Front-end developer and had a
                satisfying experience working on this. I learned lots of new
                things and made lots of great friends in the process. I
                absolutely loved this useful experience.
              </p>
            </div>
          </div>
          <img
            src={"/images/vectors/ellipse.svg"}
            alt="shape"
            className="!absolute -left-[130px] top-[120%] md:-top-[5%] !z-0 rotate-90 blur-sm"
          />
        </div>

        {/* Bottom -Landing Pages */}
        <div className="mt-[150px]">
          {/* titles */}
          <div className="flex flex-col justify-center px-10 md:px-0">
            <p className="text-white text-3xl md:text-5xl font-extrabold my-3 text-center">
              <span className="text-pink">Moverii</span> Landing Pages
            </p>
            <p className="text-white text-center">
              These are some of Moverii Landing Pages, that you can check out.{" "}
              <br />
              This is just a portion of what I helped create and enhance. <br />
              There is much, much more to this...
            </p>
          </div>

          {/* Landing Pages */}
          <div className="mt-[50px] px-6 md:px-10 lg:pr-10">
            <MoveriiPreview />
          </div>
        </div>
      </section>
    </>
  );
};

export default moverii;
