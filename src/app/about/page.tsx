"use client"
import Feature from "@/components/feature";
import { useEffect } from "react";
import ScrollOut from "scroll-out";
import Contact from "@/components/contact";
import Articles from "./components/articles";
import Company from "./components/company";

export default function Home() {
  useEffect(()=>{
    ScrollOut({
      once: true,
      threshold: 0.5
    });
    setTimeout(() => {
      if ( window && document ) {
          const splitting = require('splitting');
          splitting();
      }
    });
},[])
  return (
    <main>
      <Feature image="/assets/images/feature-about-img.png">About Us</Feature>
      <Articles />
      <Company />
      <Contact />
    </main>
  );
}
