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
import Scane from "./components/scene/scene";
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
      <View className="hero-scene pointer-events-none fixed left-0 top-0 z-10 h-screen w-screen flex justify-center items-center">
        <SceneRarticleField />
      </View>
      <View
      
      className="fixed top-[0vw] left-0 right-0 z-40 size-[100vw] md:w-[100vw] h-[100vh] flex justify-center items-center"
    >
      <Scane />
    </View>
        <FV />
      <Introduction />
      <div className="relative">
        <Vision />
      </div>
      <Brain />
      <Solution />
      <Features />
      <Roadmap />
      <ViewCanvas />

    </main>
  );
}
