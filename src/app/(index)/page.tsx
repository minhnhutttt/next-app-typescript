import Image from "next/image";
import FV from "./components/fv";
import Intro from "./components/intro";
import Vision from "./components/vision";
import Background from "./components/background";
import Token from "./components/token";
import Features from "./components/features";
import Community from "./components/community";
import Roadmap from "./components/roadmap";

export default function Home() {
  return (
    <main>
      <FV />
      <Intro />
      <Vision />
      <Background />
      <Features />
      <Community />
      <Token />
      <Roadmap />
    </main>
  );
}
