"use client";

import { useState, useEffect } from 'react';

const Header = () => {
    const [isNight, setIsNight] = useState(false);

    useEffect(() => {
      if (isNight) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isNight]);
  
    const toggleNightShift = () => {
      setIsNight(!isNight);
    };
  return (
    <header className="flex items-center justify-end px-5 md:px-4 h-12 z-40 gap-1 border-b border-dashed border-black/50 dark:border-white absolute top-0 inset-x-0">
        <button className="flex items-center justify-center h-7 px-3 rounded-[14px] bg-white border border-[#CFCFCF] text-[14px] text-helvetica">Japanese</button>
        <button className="flex items-center justify-center h-7 px-3 rounded-[14px] bg-white border border-[#CFCFCF] text-[14px] text-helvetica">English</button>
        <button className="flex items-center justify-center h-7 px-3 rounded-[14px] bg-white border border-[#CFCFCF] text-[14px] text-helvetica">Chinese</button>
        <button onClick={toggleNightShift} className={`flex items-center justify-center h-7 px-3 rounded-[14px] text-white/60 border border-[#CFCFCF] text-[14px] text-helvetica ${isNight ? 'bg-[#EF9B1D]' : 'bg-[#2B3E81]'}`}>
            {isNight ? 'Sun mode' : 'Night Shift'}
        </button>
    </header>
  );
};

export default Header;
