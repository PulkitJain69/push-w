import Head from "next/head";
import Navbar from "../src/components/Navbar";
import { GlobalStyles } from "../src/config/ThemeConfig";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Push</title>
        <link rel="icon" type="image/png" href="/icon2.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
