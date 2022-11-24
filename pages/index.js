import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../src/components/About";
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
import IndexDark from "./index-dark";
import IndexLight from "./indexLight";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  const [mode, setMode] = useState("");
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    // Perform localStorage action
    let item = localStorage.getItem('mode')
    setMode(item)
  }, [toggle]);

  const handleLight = () => {
    // alert("Hello")
    localStorage.setItem("mode", "dark");
    setToggle(!toggle)
  }
  const handleDark = () => {
    // alert("Hello")
    localStorage.setItem("mode", "light");
    setToggle(!toggle)

  }
  // let item;


  return (

    <div>
      {
        mode == "light" ? (
         
          <IndexDark />
          
          
        

        ) : (
          
          
          <IndexLight />

         

        )
      }

{/* 
      {
        mode == "light" ? (
          

        ) : (
          <div className="modeDark" >

            <div onClick={handleDark}>
              <img src="/img/mode/dark.png" alt="" />
            </div>
          </div>

        )
      } */}
    </div>


  );
};
export default Index;
