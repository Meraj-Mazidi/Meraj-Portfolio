import React, { Fragment } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { HiOutlineDocumentArrowDown, HiDocumentText } from "react-icons/hi2";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { PiHandshakeFill } from "react-icons/pi";
import Link from "next/link";

const resumePublicView =
  "https://www.canva.com/design/DAGOw6jLPh0/63Ip17dpTSVG0VLbMnxgZw/view?utm_content=DAGOw6jLPh0&utm_campaign=designshare&utm_medium=link&utm_source=editor";

const Index = () => {
  const defaultBtnStyles =
    "px-6 sm:px-4 xl:px-6 py-4 !w-full text-lg transition-all rounded overflow-hidden border-2 hover:shadow-light-xl hover:outline-none hover:border-pink focus:outline-none font-poppins font-bold z-10 text-center flex items-center gap-3 hover:gap-8 cursor-pointer";
  const filledBtn =
    "bg-pink text-blue hover:text-pink hover:bg-transparent border-transparent";
  const transparentBtn = "text-pink border-pink hover:bg-pink hover:text-blue";

  return (
    <Fragment>
      <Head>
        <meta
          name="keywords"
          content="Meraj Mazidi Portfolio, resume, frontend resume, react, nextjs, meraj resume"
        />
        <meta name="author" content="Meraj Mazidi" />
      </Head>

      <NextSeo
        title="Meraj Resume :)"
        description="Meraj Mazidi Resume page | Meraj's Resume"
        canonical="https://meraj.vercel.app/meraj-resume"
        openGraph={{
          url: "https://meraj.vercel.app/meraj-resume",
          title: "Meraj Mazidi resume",
          description: "Meraj Mazidi Resume page | Meraj's Resume",
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

      <section className="w-full py-16 font-poppins relative xl:container xl:mx-auto parentEl px-10 md:px-0">
        <div className="w-full md:h-[70vh] flex flex-col items-center justify-center">
          <div className="w-full md:max-w-[60%] lg:max-w-[400px] flex flex-col items-center justify-center gap-5">
            <a
              href={resumePublicView}
              target="_blank"
              className={`${defaultBtnStyles} ${filledBtn} justify-start`}
            >
              View Resume
              <HiDocumentText className="!text-[26px]" />
            </a>
            <Link
              to={"/Meraj-Resume.pdf"}
              href={"/Meraj-Resume.pdf"}
              download
            >
              <div
                className={`${defaultBtnStyles} ${transparentBtn} justify-end`}
              >
                <HiOutlineDocumentArrowDown className="!text-[26px]" />
                <p>Download Resume</p>
              </div>
            </Link>
            <a
              href="/connect"
              className={`${defaultBtnStyles} ${filledBtn} justify-start`}
            >
              Let's connect
              <PiHandshakeFill className="!text-[26px]" />
            </a>
            <a
              href="/"
              className={`${defaultBtnStyles} ${transparentBtn} justify-end`}
            >
              <IoIosArrowDropleftCircle className="!text-[26px]" />
              Go back
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Index;
