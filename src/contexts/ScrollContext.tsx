"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface ScrollContextType {
  isDarkSection: boolean;
  setIsDarkSection: (isDark: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isDark: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ScrollContext.Provider value={{ isDarkSection, setIsDarkSection, isLoading, setIsLoading }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};