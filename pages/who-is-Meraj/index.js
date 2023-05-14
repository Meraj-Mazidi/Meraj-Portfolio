import React from "react";
import { Fragment } from "react";
import Head from "next/head";
import { BioHeader } from "../../Components";

const index = () => {
  return (
    <Fragment>
      <Head>
        <>
          <title>Who is Meraj?</title>
          <link rel="icon" href="/logo-icon.png" />
        </>
      </Head>

      <section className="w-full font-poppins">
        <BioHeader />
      </section>
    </Fragment>
  );
};

export default index;
