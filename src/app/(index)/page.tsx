"use client"

import { View } from "@react-three/drei";
import Brain from "./components/brain";
import Features from "./components/features";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Roadmap from "./components/roadmap";
import SceneEarth from "./components/scene/sceneEarth";
import Solution from "./components/solution";
import Vision from "./components/vision";
import SceneRarticleField from "./components/scene/sceneRarticleField";
import SceneLight from "./components/scene/sceneLight";
import SceneCloud from "./components/scene/sceneCloud";
import ScenePuzzle from "./components/scene/scenePuzzle";

export default function Home() {

  return (
    <main className="overflow-hidden">
      <View className="hero-scene pointer-events-none fixed left-0 top-0 z-10 h-screen w-screen flex justify-center items-center">
        <SceneRarticleField />
      </View>
      <View className="light-scene pointer-events-none fixed top-0 z-10 h-screen w-screen block">
        <SceneLight />
        <SceneCloud />
        <ScenePuzzle />
      </View>
      <div className="hero relative">
      <View className="hero-scene pointer-events-none sticky top-0 z-10 -mt-[100vh] h-screen w-screen flex justify-center items-center">
        <SceneEarth />
      </View>
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
