import { AppProps } from "next/app";
import Head from "next/head";
import "@style/main.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
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
          content="Unicorn's Software is a save editor for the game Will You Snail?"
        />
        <meta
          name="og:description"
          content="Unicorn's Software is a save editor for the game Will You Snail?"
        />
        <meta
          name="twitter:description"
          content="Unicorn's Software is a save editor for the game Will You Snail?"
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
