'use client';

import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="mb-6">
          <img className="w-[200px] mx-auto" src="images/logo.svg" alt="Logo" />
        </div>
        <div className="relative w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-[#D8C115] animate-pulse rounded-full" style={{ width: '100%' }}></div>
        </div>
        <p className="text-white mt-4 uppercase text-sm tracking-wider">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;