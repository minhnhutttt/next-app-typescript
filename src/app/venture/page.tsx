"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import ModularScene from "./component/ModularScene";
import TextureModule from "./component/TextureModule";
import ModelModule from "./component/ModelModule";
import LoadingScreen from "../components/LoadingScreen";
import ModelScroller from "./component/ModelScroller"; // Import the new ModelScroller
// @ts-ignore
import gsap from 'gsap';

export default function Home() {
  // Model paths - you can expand this array with more models
  const modelPaths = [
    "/models/letters_simple_a4.obj",
    "/models/letters_simple_a4.obj",
    "/models/letters_simple_a4.obj",
  ];
  
  // State for loading and current model
  const [isLoading, setIsLoading] = useState(true);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  
  // Ref to store model switcher controller
  const modelSwitcherRef = useRef(null);
  
  // State to track whether all models are loaded
  const [allModelsLoaded, setAllModelsLoaded] = useState(false);
  
  // Force hide loading screen after a maximum time
  useEffect(() => {
    const forceHideLoadingScreen = setTimeout(() => {
      setIsLoading(false);
      setAllModelsLoaded(true);
    }, 1000); // 10 seconds
    
    return () => clearTimeout(forceHideLoadingScreen);
  }, []);
  
  // Handle loading complete for initial loading screen
  const handleLoadingComplete = useCallback(() => {
    // Use GSAP for a smoother loading transition
    gsap.to({}, {
      duration: 2,
      onComplete: () => {
        setIsLoading(false);
        setAllModelsLoaded(true);
      }
    });
  }, []);

  // Handle model switch triggered by scroll
  const handleModelSwitch = useCallback((index: number) => {
    if (modelSwitcherRef.current) {
      try {
        // @ts-ignore
        modelSwitcherRef.current.switchModel(index);
        // Note: setCurrentModelIndex is now called within the ModelModule 
        // after the animation completes for better synchronization
      } catch (error) {
        console.error("Error switching model:", error);
      }
    }
  }, []);

  return (
    <main className="w-full h-screen overflow-hidden relative bg-black">
        {/* Loading Screen */}
        <LoadingScreen isLoading={isLoading} />
        
        {/* 3D Scene */}
        <ModularScene onLoadingComplete={handleLoadingComplete}>
          <TextureModule texturePath="/textures/pattern.jpg" />
          <ModelModule 
            modelPaths={modelPaths} 
            ref={modelSwitcherRef}
            onModelChange={setCurrentModelIndex}
          />
        </ModularScene>
        
        {/* Replace ModelSwitcher with ModelScroller */}
        {!isLoading && (
          <ModelScroller
            modelCount={modelPaths.length}
            onModelSwitch={handleModelSwitch}
            currentModelIndex={currentModelIndex}
            isLoading={!allModelsLoaded}
          />
        )}
        
      {/* Static UI Elements */}
      <div className="absolute md:top-10 md:left-10 top-7 left-7 z-20">
        <a href="/" className="">
          <img className="max-md:w-[150px]" src="images/logo.svg" alt="" />
        </a>
      </div>
      <div className="absolute top-16 md:top-1/2 md:-translate-y-1/2 inset-x-0 px-10 z-[10]">
        <p className="w-[30rem] text-[#D8C115]">
          ARDOREX supports advanced digital marketing practices and provides
          comprehensive solutions to customer challenges in collaboration with
          affiliated specialized business partners.
        </p>
      </div>

      <footer className="fixed bottom-0 left-0 w-full z-[999] pb-10 md:pb-20 px-10">
        <div className="relative site-max flex justify-between items-end">
          <a
            href="/"
            className="btn inline-flex relative py-2 px-5 leading-none text-white text-[14px]"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 overflow-hidden">
                <div className="btn-line-top-l absolute left-0 top-0 right-0 border-b border-current origin-left w-4"></div>
                <div className="btn-line-side-l absolute left-0 top-0 bottom-0 border-r border-current origin-bottom"></div>
                <div className="btn-line-bottom-l absolute left-0 bottom-0 right-0 border-t border-current origin-left w-4"></div>
              </div>
              <div className="absolute inset-0 overflow-hidden">
                <div className="btn-line-top-r absolute top-0 right-0 border-b border-current origin-right w-4"></div>
                <div className="btn-line-side-r absolute right-0 top-0 bottom-0 border-l border-current origin-top"></div>
                <div className="btn-line-bottom-r absolute bottom-0 right-0 border-t border-current origin-right w-4"></div>
              </div>
            </div>
            <div className="relative z-2 uppercase">Liquid</div>
          </a>
          <a
            href="/"
            className="btn inline-flex relative py-2 px-5 leading-none text-white text-[14px]"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 overflow-hidden">
                <div className="btn-line-top-l absolute left-0 top-0 right-0 border-b border-current origin-left w-4"></div>
                <div className="btn-line-side-l absolute left-0 top-0 bottom-0 border-r border-current origin-bottom"></div>
                <div className="btn-line-bottom-l absolute left-0 bottom-0 right-0 border-t border-current origin-left w-4"></div>
              </div>
              <div className="absolute inset-0 overflow-hidden">
                <div className="btn-line-top-r absolute top-0 right-0 border-b border-current origin-right w-4"></div>
                <div className="btn-line-side-r absolute right-0 top-0 bottom-0 border-l border-current origin-top"></div>
                <div className="btn-line-bottom-r absolute bottom-0 right-0 border-t border-current origin-right w-4"></div>
              </div>
            </div>
            <div className="relative z-2 uppercase">VENTURE</div>
          </a>
          <a
            href="mailto:INFO@ARDOREX.NET"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex text-gray transition-colors duration-300 ease-out has-hover:hover:text-yellow pointer-events-auto text-gray-300 uppercase"
          >
            <span>[email&nbsp;protected]</span>
          </a>
        </div>
      </footer>
    </main>
  );
}