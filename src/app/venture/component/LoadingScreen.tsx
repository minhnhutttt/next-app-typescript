'use client';

import React, { useEffect, useState, useRef } from 'react';
// @ts-ignore
import gsap from 'gsap';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [opacity, setOpacity] = useState(1);
  const loadingRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  
  // Simulated progress animation
  useEffect(() => {
    if (!isLoading) return;
    
    // Animate progress to 100% over time
    const progressTl = gsap.timeline();
    
    // Start slow, accelerate in the middle, then slow down at the end
    progressTl.to(progressRef.current, {
      width: '30%',
      duration: 2,
      ease: 'power1.in'
    });
    
    progressTl.to(progressRef.current, {
      width: '75%',
      duration: 3,
      ease: 'power1.inOut'
    });
    
    progressTl.to(progressRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power3.out'
    });
    
    return () => {
      progressTl.kill();
    };
  }, [isLoading]);
  
  // Handle the fade-out animation when loading is complete
  useEffect(() => {
    if (!isLoading && loadingRef.current) {
      // Fade out with GSAP
      gsap.to(loadingRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          setOpacity(0);
        }
      });
    }
  }, [isLoading]);
  
  if (!isLoading && opacity === 0) return null;

  return (
    <div 
      ref={loadingRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      style={{ opacity }}
    >
      <div className="text-center">
        <div className="mb-6">
          <img className="w-[200px] mx-auto" src="/images/logo.svg" alt="Logo" />
        </div>
        
        {/* Enhanced progress bar with smoother animation */}
        
        <p className="text-white mt-4 uppercase text-sm tracking-wider">Loading...</p>
        
        {/* Add particle effect to make loading more interesting */}
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-[#D8C115] rounded-full opacity-50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Add CSS for particle animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(30px);
            opacity: 0;
          }
        }
        
        .absolute.w-1 {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;