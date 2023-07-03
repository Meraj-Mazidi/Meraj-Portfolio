import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Layout } from "../Components";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-icon.png" />
        <meta name="description" content="Meraj Mazidi Portfolio Page" />
        <meta name="keywords" content="Meraj Mazidi Portfolio" />
        <meta name="author" content="Meraj Mazidi" />
      </Head>

      <NextSeo
        title="Meraj Portfolio :)"
        description="Meraj Mazidi Portfolio Page"
        canonical="https://meraj.vercel.app/"
        openGraph={{
          url: "https://meraj.vercel.app/",
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

      <Layout Children={<Component {...pageProps} />} />
      {/* <Layout />
      <Component {...pageProps} /> */}
      
    </>
  );
}
