"use client";

import { OrbitControls, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import ParticleField from "./rarticleField";
import { Earth } from "./Earth";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import OverSCroll from "../overSCroll";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOOR = 3;

import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Roadmap from "../roadmap";
import FV from "../fv";
import Introduction from "../introduction";
import Vision from "../vision";
import Brain from "../brain";
import Solution from "../solution";
import Features from "../features";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



const ScrollBackground = () => {
  return (
    <div className="fixed inset-0 h-screen bg-black">
      <Canvas >
      <directionalLight position={[0, 0, 5]}/>
      <ambientLight intensity={1} />
        {/* <OrbitControls  enableZoom={false}/> */}
        <ScrollControls pages={8} damping={0.25}>
            <Earth />
            <ParticleField /> 
            <OverSCroll />
            <Scroll html>
              <div className="w-full">
              <FV />
              <Introduction />
              <Vision />
              <Brain />
              <Solution />
              <Features />
              <Roadmap />
              </div>
            </Scroll>
        </ScrollControls>
      </Canvas>
      </div>
  );
};

export default ScrollBackground;
