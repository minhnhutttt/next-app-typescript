"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isAnimationComplete: boolean;
  setAnimationComplete: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const setAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  return (
    <LoadingContext.Provider value={{ isAnimationComplete, setAnimationComplete }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};