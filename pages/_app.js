import Head from "next/head";
import { createContext, Fragment, useState } from "react";
import AppContext from "../src/components/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [toggle, setToggle] = useState(false);
  const [mode, setMode] = useState("light")
  return (
    <AppContext.Provider value={{toggle, setToggle, mode, setMode}}>
      <Head />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
