"use client"
import Feature from "@/components/feature";
import { useEffect } from "react";
import ScrollOut from "scroll-out";
import Contact from "@/components/contact";
import Rwas from "./components/rwas";

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
      <Feature image="/assets/images/feature-potential-img.png">The Potential of Real World<br /> Assets (RWAs)</Feature>
      <Rwas />
      <Contact />
    </main>
  );
}
