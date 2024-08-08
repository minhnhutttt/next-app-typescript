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
    <header className="flex md:items-center md:justify-end max-md:flex-col md:px-4 h-full md:h-12 z-40 gap-9 md:gap-1 border-b border-dashed border-black/50 dark:border-white absolute top-0 left-0 md:inset-x-0 max-md:pt-10">
        <button className="flex items-center justify-center h-7 pr-2 pl-1 md:px-3 max-md:rounded-l-none max-md:border-l-0 rounded-[14px] bg-white border border-[#CFCFCF] text-[14px] text-helvetica"><span className="max-md:hidden">Japanese</span><span className="md:hidden">Ja</span></button>
        <button className="flex items-center justify-center h-7 pr-2 pl-1 md:px-3 max-md:rounded-l-none max-md:border-l-0 rounded-[14px] bg-white border border-[#CFCFCF] text-[14px] text-helvetica"><span className="max-md:hidden">English</span><span className="md:hidden">En</span></button>
        <button className="flex items-center justify-center h-7 pr-2 pl-1 md:px-3 max-md:rounded-l-none max-md:border-l-0 rounded-[14px] bg-white border border-[#CFCFCF] text-[14px] text-helvetica"><span className="max-md:hidden">Chinese</span><span className="md:hidden">Ch</span></button>
        <button onClick={toggleNightShift} className={`flex items-center justify-center h-7 pr-2 pl-1 md:px-3 max-md:rounded-l-none max-md:border-l-0 rounded-[14px] text-white/60 border border-[#CFCFCF] text-[14px] text-helvetica ${isNight ? 'bg-[#EF9B1D]' : 'bg-[#2B3E81]'}`}>
            <span className="max-md:hidden">{isNight ? 'Sun mode' : 'Night Shift'}</span>
            <span className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
              <g clip-path="url(#clip0_840_8559)">
                <path d="M8 0L10.4725 4.93759L16 5.73L12.0005 9.5731L12.944 15L8 12.4376L3.05601 15L4.00052 9.5731L0 5.73L5.52748 4.93759L8 0Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_840_8559">
                  <rect width="16" height="15" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            </span>
        </button>
    </header>
  );
};

export default Header;
