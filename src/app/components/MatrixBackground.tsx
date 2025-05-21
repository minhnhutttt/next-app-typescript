"use client"
import React, { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import conditionally with dynamic import
const DynamicMatrixEffect = dynamic(
  () => import('../hooks/useMatrixEffect').then(mod => ({ 
    default: ({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) => {
      const { cleanup } = mod.default(canvasRef);
      
      // Cleanup on unmount
      useEffect(() => {
        return () => {
          if (cleanup) cleanup();
        };
      }, [cleanup]);
      
      return null;
    }
  })),
  { ssr: false } // Important: disable SSR
);

interface MatrixBackgroundProps {
  className?: string;
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Only load Three.js after component is mounted on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0"
      />
      {isMounted && <DynamicMatrixEffect canvasRef={canvasRef} />}
    </>
  );
};

export default MatrixBackground;