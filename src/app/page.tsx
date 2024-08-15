"use client";
import ScaledDivs from "./components/ScaledDivs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProgressBar from "./components/progressBar"
import { useState } from "react";
import PixelImageComponent from "./components/pixelImageComponent";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showPixelImage, setShowPixelImage] = useState(true);

  const handlePixelImageComplete = () => {
    setShowPixelImage(false);
  };
  return (
    <main>
       {!loadingComplete && <ProgressBar onComplete={() => setLoadingComplete(true)} />}
      {loadingComplete && showPixelImage && (
        <PixelImageComponent loadingComplete={loadingComplete} onComplete={handlePixelImageComplete} />
      )}
      <ScaledDivs />
    </main>
  );
}
