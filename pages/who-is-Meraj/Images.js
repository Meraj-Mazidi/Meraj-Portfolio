import React from "react";
import Head from "next/head";
import { Fragment } from "react";
import { NextSeo } from "next-seo";

// Gallery
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const ImagesData = [
  {
    image: "/images/Bio/1.JPG",
  },
  {
    image: "/images/Bio/2.jpg",
    customClass: "!object-right",
  },
  {
    image: "/images/Bio/3.JPG",
  },
  {
    image: "/images/Bio/4.JPG",
  },
  {
    image: "/images/Bio/5.JPG",
  },
  {
    image: "/images/Bio/6.JPG",
  },
  {
    image: "/images/Bio/7.jpg",
  },
  {
    image: "/images/Bio/8.jpg",
  },
];

const Images = () => {
  return (
    <Fragment>
      <Head>
        <>
          <link rel="icon" href="/logo-icon.png" />
          <meta name="description" content="Meraj Mazidi Portfolio Page" />
          <meta name="keywords" content="Meraj Mazidi Portfolio" />
          <meta name="author" content="Meraj Mazidi" />
        </>
      </Head>

      <NextSeo
        title="Meraj Images"
        description="Meraj Mazidi Portfolio Page - Meraj Images"
        canonical="https://meraj.vercel.app/who-is-Meraj/Images"
        openGraph={{
          url: "https://meraj.vercel.app/who-is-Meraj/Images",
          title: "Meraj Mazidi",
          description: "Meraj Mazidi Portfolio Page",
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

      <section className="w-screen h-full md:pl-10 lg:pl-32 mb-10 xl:container xl:mx-auto mt-5 xl:mt-10">
        <div className="flex flex-col items-center text-center px-4 mt-5 md:mt-0">
          <p className="text-white text-4xl font-bold text-center">
            How do I look like in the real world?
          </p>
          <p className="md:w-[650px] text-center text-violet text-base">
            These are some of the images, in which you can see the actual ME :)
          </p>
        </div>

        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="!grid !grid-cols-1 md:!grid-cols-2 !gap-10 !mt-16 !px-6 md:!pr-5"
        >
          {ImagesData.map((item, i) => (
            <a
              href={item.image}
              key={i}
              className="w-full md:w-[90%] xl:w-full"
            >
              <img
                src={item.image}
                alt="Meraj Mazidi"
                className={`w-full h-full rounded-2xl hover:shadow-light-3xl object-cover object-center ${item.customClass}`}
              />
            </a>
          ))}
        </LightGallery>
      </section>
    </Fragment>
  );
};

export default Images;
