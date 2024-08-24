import { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Meraj Mazidi Portfolio Page" />
        <meta name="keywords" content="Meraj Mazidi Portfolio, Meraj, meraj mazidi, frontend developer, react, nextjs" />
        <meta name="author" content="Meraj Mazidi" />
        <link rel="icon" href="/logo-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
