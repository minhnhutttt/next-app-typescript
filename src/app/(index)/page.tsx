'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ThreeScene from './component/ThreeScene';
import ThreeJSInteractive from './component/ThreeScene';
import ThreeAnimation from './component/ThreeScene';
// Dynamically import the Three.js component with SSR disabled
// This is necessary because Three.js relies on browser APIs that aren't available during server-side rendering

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
        <ThreeAnimation />
    </main>
  );
}