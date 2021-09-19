import "@styles/main.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import { useEffect } from "react";

export default function UnicornsSoftware({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!localStorage.slots) {
      localStorage.slots = JSON.stringify([{}, {}, {}]);
      console.log("Slots value was set to the initial value");
    } else console.log("Save slots were fetched successfully");
  }, []);

  return (
    <>
      <Head>
        <title>{"Unicorn's Software"}</title>
        <link rel="icon" href="/image/unicorn.png" />
        <meta name="theme-color" content="#ff37d2" />
        <meta name="title" content="Unicorn's Software" />
        <meta name="og:title" content="Unicorn's Software" />
        <meta name="og:site_name" content="unicorns.software" />
        <meta
          name="description"
          content="Unicorn's Software is a toolkit for the game Will You Snail?"
        />
        <meta
          name="og:description"
          content="Unicorn's Software is a toolkit for the game Will You Snail?"
        />
        <meta
          name="twitter:description"
          content="Unicorn's Software is a toolkit for the game Will You Snail?"
        />
        <meta
          name="og:image"
          content="https://unicorns.software/image/logo.png"
        />
        <meta
          name="twitter:image"
          content="https://unicorns.software/image/logo.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
