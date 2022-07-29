import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
