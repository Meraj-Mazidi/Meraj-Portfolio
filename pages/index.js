import Head from "next/head";
import { NextSeo } from "next-seo";
import {
  Header,
  Explore,
  Work,
  Product,
  Projects,
  Connect,
  Github,
  Footer,
} from "../sections";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Meraj Mazidi Portfolio Page" />
        <meta name="keywords" content="Meraj Mazidi Portfolio" />
        <meta name="author" content="Meraj Mazidi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <main className="w-full">
        <Header />
        <Explore />
        <Work />
        <Product />
        <Projects />
        <Connect />
        <Github />
        <Footer />
      </main>
    </>
  );
}
