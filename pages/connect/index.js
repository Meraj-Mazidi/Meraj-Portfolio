import React from "react";
import { Fragment } from "react";
import Head from "next/head";
import { LetsConnect } from "../../Components";

const index = () => {
  return (
    <Fragment>
      <Head>
        <>
          <title>Let's Connect</title>
          <link rel="icon" href="/logo-icon.png" />
        </>
      </Head>

      <section className="w-full font-poppins">
        <LetsConnect />
      </section>
    </Fragment>
  );
};

export default index;
