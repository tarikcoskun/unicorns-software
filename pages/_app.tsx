import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{"Unicorn's Software"}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
