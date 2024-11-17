"use client";

import { View } from "@react-three/drei";
import Brain from "./components/brain";
import Features from "./components/features";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Roadmap from "./components/roadmap";
import Solution from "./components/solution";
import Vision from "./components/vision";
import SceneRarticleField from "./components/scene/sceneRarticleField";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ViewCanvas = dynamic(() => import("@/components/viewCanvas"), {
  ssr: false,
});


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main className="overflow-hidden">
      <ViewCanvas />
      <View className="hero-scene pointer-events-none  fixed left-0 top-0 z-10 h-screen w-screen flex justify-center items-center">
        <SceneRarticleField />
      </View>
      {/* <View className="light-scene pointer-events-none fixed top-0 z-40 h-screen w-screen block">
        <SceneLight />
        <SceneCloud />
        <ScenePuzzle />
      </View> */}
      <div className="hero ">
        <FV />
      </div>
      <Introduction />
      <div className="relative">
        <Vision />
      </div>
      <Brain />
      <Solution />
      <Features />
      <Roadmap />
    </main>
  );
}
