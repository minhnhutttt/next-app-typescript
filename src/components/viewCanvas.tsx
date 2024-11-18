"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@react-three/drei").then((mod) => mod.Loader), {
  ssr: false,
});

export default function ViewCanvas() {
  return (
    <>
      <Canvas
         style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        eventSource={document.body}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
