"use client"
import FV from "./components/fv";
import { useEffect } from "react";
import ScrollOut from "scroll-out";
import Philosophy from "./components/philosophy";
import Slider from "./components/slider";
import Allure from "./components/allure";
import Market from "./components/market";

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
      <FV />
      <Philosophy />
      <Slider />
      <Allure />
      <Market />
    </main>
  );
}
