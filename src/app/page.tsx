"use client"
import ScrollOut from "scroll-out";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Present from "./components/present";
import Movie from "./components/movie";
import Comparison from "./components/comparison";
import { useEffect } from "react";
import Diver from "./components/diver";
import Approach from "./components/approach";
import GetNFT from "./components/getNFT";
import Line from "./components/line";
import Toppa from "./components/toppa";
import Voice from "./components/voice";

export default function Home() {
  useEffect(()=>{
    ScrollOut({
      threshold: 0.4,
    });
},[])
  return (
    <main>
      <FV />
      <Introduction />
      <Present />
      <Movie />
      <Comparison />
      <Diver />
      <Approach />
      <GetNFT />
      <Line />
      <Toppa />
      <Voice />
    </main>
  );
}
