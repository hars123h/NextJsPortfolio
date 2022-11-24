import dynamic from "next/dynamic";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import About from "../src/components/About";
import AppContext from "../src/components/AppContext";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";



const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  const context = useContext(AppContext)
  // const [mode, setMode] = useState("");
  // useEffect(() => {
  //   // Perform localStorage action
  //   let item = localStorage.getItem('mode')
   
  //   setMode(item)
  // }, [context.toggle]);

  // console.log("modeeee", mode);

  useEffect(() => {
    console.log("mdddd", context.mode);
    
    if(context.mode == "light") {
      console.log("thisis check");
      document.querySelector("body").classList.add("dark");
    }

   else if(context.mode == "dark") {
      document.querySelector("body").classList.remove("dark");

    }
    else if(!context.mode) {
      document.querySelector("body").classList.remove("dark");

    }
    else if(context.mode ==null) {
      document.querySelector("body").classList.add("dark");

    }
  }, [context.toggle]);

 
  // let item;


  return (

    <>
      {
        context.mode == "light"? (
          <Layout dark>
          <Head>
            <title>Dizme | Home</title>
          </Head>
          <Home dark />
          {/* HERO */}
          {/* PROCESS */}
          <Process dark />
          {/* /PROCESS */}
          {/* ABOUT */}
          <About dark />
          {/* /ABOUT */}
          {/* PORTFOLIO */}
          <Portfolio />
          {/* /PORTFOLIO */}
          {/* SKILLS */}
          <Skills dark />
          {/* /SKILLS */}
          {/* SERVICES */}
          {/* <Service dark /> */}
          {/* /SERVICES */}
          {/* TESTIMONIALS */}
          <Testimonial />
          {/* /TESTIMONIALS */}
          {/* PARTNERS */}
          <Partners dark />
          {/* /PARTNERS */}
          {/* NEWS */}
          {/* <News />
          <Newsletter /> */}
          <Contact />
        </Layout>
        ) : (
          <Layout>
     
      <Home  />
      {/* HERO */}
      {/* PROCESS */}
      <Process />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills />
      {/* /SKILLS */}
      {/* SERVICES */}
      {/* <Service /> */}
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      <Partners />
      {/* /PARTNERS */}
      {/* NEWS */}
      {/* <News />
      <Newsletter /> */}
      <Contact />
    </Layout>
        )
      }

    </>


  );
};
export default Index;
