"use client"
import ScrollOut from "scroll-out";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Present from "./components/present";
import Movie from "./components/movie";
import Comparison from "./components/comparison";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    ScrollOut({
      threshold: 0.3
    });
},[])
  return (
    <main>
      <FV />
      <Introduction />
      <Present />
      <Movie />
      <Comparison />
    </main>
  );
}
