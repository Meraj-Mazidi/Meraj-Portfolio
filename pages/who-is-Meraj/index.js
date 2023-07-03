import React from "react";
import { Fragment } from "react";
import Head from "next/head";
import { BioHeader } from "../../Components";
import { NextSeo } from "next-seo";

const index = () => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/logo-icon.png" />
        <meta name="description" content="Meraj Mazidi Portfolio Page" />
        <meta name="keywords" content="Meraj Mazidi Portfolio" />
        <meta name="author" content="Meraj Mazidi" />
      </Head>

      <NextSeo
        title="Who is Meraj?"
        description="Meraj Mazidi Portfolio Page"
        canonical="https://meraj.vercel.app/who-is-Meraj"
        openGraph={{
          url: "https://meraj.vercel.app/who-is-Meraj",
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

      <section className="w-full font-poppins">
        <BioHeader />
      </section>
    </Fragment>
  );
};

export default index;
