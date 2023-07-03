import React from "react";
import { Fragment } from "react";
import Head from "next/head";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { Footer } from "../../sections";
import { NextSeo } from "next-seo";

export const ProjectsFull = [
  {
    title: "Moverii.de",
    coverImg: "images/projects/moverii.png",
    link: "https://moverii.de",
    slug: "moverii",
  },
  {
    title: "Next.js Blog App",
    coverImg: "images/projects/Next-JS-Blog.png",
    link: "https://meraj-next-js-blog.vercel.app/",
    slug: "Next.js-Blog-App",
  },
  {
    title: "Complex Financial Dashboard",
    coverImg: "images/projects/Financial-Dashboard.png",
    link: "https://meraj-financial-dashboard.netlify.app/",
    slug: "Financial-Dashboard",
  },
  {
    title: "Creative Agency Landing Page",
    coverImg: "images/projects/Next-Creative-Agency.png",
    link: "https://next-js-creative-landing-page.vercel.app/",
    slug: "Creative-Agency-LandingPage",
  },

  {
    title: "Fitness website",
    coverImg: "images/projects/FitClub.png",
    link: "https://meraj-fit-club.pages.dev/",
    slug: "Fitness-Landing",
  },

  {
    title: "Crypto World",
    coverImg: "images/projects/CryptoWorld.png",
    link: "https://meraj-crypto-world.pages.dev/",
    slug: "CryptoWorld",
  },
  {
    title: "Modern Bank Website",
    coverImg: "images/projects/Modern-Bank.png",
    link: "https://meraj-modern-bank-website.pages.dev/",
    slug: "Modern-Bank-Landing",
  },
  {
    title: "Latest Portfolio",
    coverImg: "images/projects/last-Portfolio.png",
    link: "https://meraj-last-portfolio.pages.dev/",
    slug: "Last-Portfolio",
  },
  {
    title: "Blog Project",
    coverImg: "images/projects/Blog-react.png",
    link: "https://meraj-blog.pages.dev/",
    slug: "React-Blog",
  },
  {
    title: "Red Portfolio",
    coverImg: "images/projects/red-portfolio.png",
    link: "https://meraj-portfolio.pages.dev/",
    slug: "Red-Portfolio",
  },
  {
    title: "Random Quiz App",
    coverImg: "images/projects/quiz-app.png",
    link: "https://meraj-random-quiz-app.pages.dev/",
    slug: "Random-Quiz-App",
    goDirect: true,
  },
  {
    title: "Green Portfolio",
    coverImg: "images/projects/green-Portfolio.png",
    link: "https://meraj-green-portfolio.pages.dev/",
    slug: "Green-Portfolio",
  },
  {
    title: "Tailwind Portfolio",
    coverImg: "images/projects/Tailwind-Portfolio.png",
    link: "https://meraj-mazidi.github.io/Tailwind-portfolio/",
    slug: "Tailwind-Portfolio",
  },
  {
    title: "Random Meme Creator",
    coverImg: "images/projects/Random-Meme.png",
    link: "https://meraj-create-random-meme.pages.dev/",
    slug: "Random-Meme",
    goDirect: true,
  },
];

const projects = () => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/logo-icon.png" />
        <meta name="description" content="Meraj Mazidi Portfolio Page | Meraj's Projects" />
        <meta name="keywords" content="Meraj Mazidi Portfolio, Projects, React, Next.js, Tailwind, design" />
        <meta name="author" content="Meraj Mazidi" />
      </Head>

      <NextSeo
        title="Meraj Projects :)"
        description="Meraj Mazidi Portfolio Page | Meraj's Projects"
        canonical="https://meraj.vercel.app/projects/"
        openGraph={{
          url: "https://meraj.vercel.app/projects/",
          title: "Meraj Mazidi",
          description: "Meraj Mazidi Portfolio Page | Meraj's Projects",
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

      <section className="w-screen lg:pl-32 py-16 font-poppins relative xl:container xl:mx-auto">
        <img
          src={"images/vectors/quater-spin.svg"}
          alt="shape"
          className="absolute -right-20 top-[80px] md:top-0 lg:w-[500px]"
        />
        <img
          src={"images/vectors/boxes.svg"}
          alt="shape"
          className="absolute right-0 bottom-[30%] rotate-45 blur-sm"
          width={2000}
        />
        <div className="flex flex-col gap-10 justify-center items-center mb-20">
          {/* Title */}
          <span className="flex flex-col gap-5 text-center mb-20">
            <p className="text-white font-extrabold text-5xl">
              Something that he has build
            </p>
            <p className="text-white text-lg">
              with <span className="text-pink font-bold">love</span>, expertise
              and pinch of magical ingredients
            </p>
          </span>

          {/* Projects */}
          <div className="w-full">
            <ul className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 px-6 lg:pr-10">
              {ProjectsFull.map((item, i) => (
                <Tilt
                  key={i}
                  scale="1.1"
                  transitionSpeed={5000}
                  className="w-[100%] rounded-xl shadow-light-xl hover:shadow-light-3xl md:mb-16 cursor-pointer"
                >
                  <li>
                    <Link
                      href={`${
                        item.goDirect ? item.link : `/projects/${item.slug}`
                      } `}
                      target={`${item.goDirect ? "_blank" : "_self"}`}
                      className="rounded-xl"
                    >
                      <img
                        src={item.coverImg}
                        alt={item.title}
                        width="auto"
                        height="auto"
                        className="w-full rounded-xl"
                      />
                    </Link>
                  </li>
                </Tilt>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <Footer />
        </div>
      </section>
    </Fragment>
  );
};

export default projects;
