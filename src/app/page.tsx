"use client"
import FV from "./components/fv";
import { useEffect } from "react";
import ScrollOut from "scroll-out";

export default function Home() {
  useEffect(()=>{
    ScrollOut({
      once: true
    });
    setTimeout(() => {
      if ( window && document ) {
          const splitting = require('splitting');
          splitting();
      }
    });
},[])
  return (
    <main className="h-[10000px]">
      <FV />
    </main>
  );
}
