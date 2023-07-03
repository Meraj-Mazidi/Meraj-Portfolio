import React from "react";
import { Fragment } from "react";
import Head from "next/head";
import { LetsConnect } from "../../Components";
import { NextSeo } from "next-seo";

const index = () => {
  return (
    <Fragment>
      <Head>
        <>
          <link rel="icon" href="/logo-icon.png" />
          <meta name="description" content="Meraj Mazidi Portfolio Page | Contact Meraj" />
          <meta name="keywords" content="Meraj Mazidi Portfolio" />
          <meta name="author" content="Meraj Mazidi" />
        </>
      </Head>

      <NextSeo
        title="Let's Connect"
        description="Meraj Mazidi Portfolio Page | Contact Meraj"
        canonical="https://meraj.vercel.app/connect"
        openGraph={{
          url: "https://meraj.vercel.app/connect",
          title: "Meraj Mazidi",
          description: "Meraj Mazidi Portfolio Page | Contact Meraj",
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

      <section className="!w-full font-poppins connectContainer">
        <LetsConnect />
      </section>
    </Fragment>
  );
};

export default index;
