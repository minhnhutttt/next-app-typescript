"use client";
import ScaledDivs from "./components/ScaledDivs";
import ProgressBar from "./components/progressBar"
import { useState } from "react";
import PixelImageComponent from "./components/pixelImageComponent";


export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showPixelImage, setShowPixelImage] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const handlePixelImageComplete = () => {
    setShowPixelImage(false);
  };
  const toggleMute = () => {
    setIsMuted(prevState => !prevState);
  };
  return (
    <main>
       {!loadingComplete && <ProgressBar onComplete={() => setLoadingComplete(true)} />}
      {loadingComplete && showPixelImage && (
        <PixelImageComponent loadingComplete={loadingComplete} onComplete={handlePixelImageComplete} />
      )}
      <ScaledDivs isMuted={isMuted} />
      <button  onClick={toggleMute} className="fixed md:right-10 right-5 md:bottom-10 bottom-5 flex items-center gap-2 font-['STIX_Two_Text'] z-[9999]">
        <span>{isMuted ? 'Trun On' : 'Turn off'}</span>
        <figure>
          <svg xmlns="http://www.w3.org/2000/svg" className={`size-10 md:size-20 ${!isMuted && 'animate'}`} viewBox="0 0 172 172" fill="none">
            <path className="animate" d="M115.486 135.757C114.025 135.738 112.63 135.149 111.597 134.117C110.565 133.084 109.976 131.689 109.957 130.228V41.7713C109.957 40.305 110.539 38.8987 111.576 37.8619C112.613 36.825 114.019 36.2426 115.486 36.2426C116.952 36.2426 118.358 36.825 119.395 37.8619C120.432 38.8987 121.014 40.305 121.014 41.7713V130.228C120.995 131.689 120.406 133.084 119.374 134.117C118.341 135.149 116.946 135.738 115.486 135.757Z" fill="black"/>
            <path className="animate" d="M144.971 109.957C143.511 109.938 142.115 109.349 141.083 108.317C140.05 107.284 139.462 105.889 139.442 104.428V67.5713C139.442 66.105 140.025 64.6986 141.062 63.6619C142.098 62.6252 143.505 62.0425 144.971 62.0425C146.437 62.0425 147.844 62.6252 148.88 63.6619C149.917 64.6986 150.5 66.105 150.5 67.5713V104.428C150.48 105.889 149.892 107.284 148.859 108.317C147.827 109.349 146.431 109.938 144.971 109.957Z" fill="#F25220"/>
            <path className="animate" d="M27.0285 109.957C25.5682 109.938 24.1731 109.349 23.1404 108.317C22.1076 107.284 21.5191 105.889 21.5 104.428V67.5713C21.5 66.105 22.0824 64.6986 23.1194 63.6619C24.1561 62.6252 25.5622 62.0425 27.0285 62.0425C28.4948 62.0425 29.9011 62.6252 30.9379 63.6619C31.9746 64.6986 32.5572 66.105 32.5572 67.5713V104.428C32.5381 105.889 31.9494 107.284 30.9168 108.317C29.8841 109.349 28.489 109.938 27.0285 109.957Z" fill="#F25220"/>
            <path className="animate" d="M56.5139 135.757C55.0536 135.738 53.6584 135.149 52.6256 134.117C51.5929 133.084 51.0043 131.689 50.9854 130.228V41.7713C50.9854 40.305 51.5678 38.8987 52.6045 37.8619C53.6415 36.825 55.0476 36.2426 56.5139 36.2426C57.9802 36.2426 59.3863 36.825 60.4232 37.8619C61.4599 38.8987 62.0424 40.305 62.0424 41.7713V130.228C62.0232 131.689 61.4348 133.084 60.4019 134.117C59.3693 135.149 57.9741 135.738 56.5139 135.757Z" fill="black"/>
            <path className="animate" d="M86.0002 124.7C84.5399 124.681 83.1448 124.092 82.1121 123.06C81.0795 122.027 80.4908 120.632 80.4717 119.171V52.8285C80.4717 51.3622 81.0541 49.9561 82.0911 48.9194C83.1278 47.8824 84.5339 47.3 86.0002 47.3C87.4665 47.3 88.8728 47.8824 89.9095 48.9194C90.9463 49.9561 91.5289 51.3622 91.5289 52.8285V119.171C91.5098 120.632 90.9211 122.027 89.8885 123.06C88.8558 124.092 87.4607 124.681 86.0002 124.7Z" fill="#F25220"/>
          </svg>
        </figure>
      </button>
    </main>
  );
}
