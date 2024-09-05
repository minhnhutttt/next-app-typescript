"use client";
import ScaledDivs from "./components/ScaledDivs";
import ProgressBar from "./components/progressBar"
import { useState } from "react";
import NoiseAnimation from "./components/noiseAnimation";


export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main>
       {!loadingComplete && <ProgressBar onComplete={() => setLoadingComplete(true)} />}
      {loadingComplete && (
        <NoiseAnimation />
      )}
      <ScaledDivs />
    </main>
  );
}
