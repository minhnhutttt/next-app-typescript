"use client";

import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Locale } from '../dictionaries';

const locales: Locale[] = [ 'ja','en', 'zh'];
const defaultLocale: Locale = 'ja';

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  // Xác định ngôn ngữ hiện tại từ URL
  const getCurrentLocale = (): Locale => {
    const firstSegment = pathname.split('/')[1];
    return locales.includes(firstSegment as Locale) 
      ? (firstSegment as Locale) 
      : defaultLocale;
  };
  
  const currentLocale = getCurrentLocale();
  
  // Tạo URL mới khi chuyển đổi ngôn ngữ
  const getLocalizedUrl = (newLocale: Locale): string => {
    // Nếu chỉ có đường dẫn ngôn ngữ gốc (ví dụ: /ja/, /en/, /zh/)
    if (pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`) {
      return newLocale === defaultLocale ? '/' : `/${newLocale}/`;
    }
    
    // Nếu URL hiện tại không có ngôn ngữ (tức là trang gốc /)
    if (pathname === '/' || pathname === '') {
      return newLocale === defaultLocale ? '/' : `/${newLocale}/`;
    }
    
    // Nếu URL hiện tại có đường dẫn con (ví dụ: /ja/blog, /en/about)
    if (locales.includes(pathname.split('/')[1] as Locale)) {
      // Lấy phần path sau locale
      const pathAfterLocale = pathname.substring(pathname.indexOf('/', 1));
      
      // Tạo đường dẫn mới - ĐÃ SỬA: luôn thêm tiền tố ngôn ngữ
      return `/${newLocale}${pathAfterLocale}`;
    }
    
    // Trường hợp còn lại (URL không có locale, như /about, /blog)
    return newLocale === defaultLocale 
      ? pathname 
      : `/${newLocale}${pathname}`;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="flex md:items-center md:justify-end max-md:flex-col md:px-4 h-full md:h-12 z-40 gap-9 md:gap-1 border-b border-dashed border-black/50 dark:border-white absolute top-0 left-0 md:inset-x-0 max-md:pt-10 max-md:hidden">
      <a href={getLocalizedUrl('ja')}
        className={`flex items-center justify-center h-7 pr-2 pl-1 md:px-3 max-md:rounded-l-none max-md:border-l-0 rounded-[14px] border border-[#CFCFCF] text-[14px] text-helvetica ${currentLocale === 'ja' ? 'bg-[#F97373] text-white' : 'bg-white'}`}
      >
        <span className="max-md:hidden">Japanese</span><span className="md:hidden">Ja</span>
      </a>
      <a href={getLocalizedUrl('en')}
        className={`flex items-center justify-center h-7 pr-2 pl-1 md:px-3 max-md:rounded-l-none max-md:border-l-0 rounded-[14px] border border-[#CFCFCF] text-[14px] text-helvetica ${currentLocale === 'en' ? 'bg-[#F97373] text-white' : 'bg-white'}`}
      >
        <span className="max-md:hidden">English</span><span className="md:hidden">En</span>
      </a>
      <a href={getLocalizedUrl('zh')}
        className={`flex items-center justify-center h-7 pr-2 pl-1 md:px-3 max-md:rounded-l-none max-md:border-l-0 rounded-[14px] border border-[#CFCFCF] text-[14px] text-helvetica ${currentLocale === 'zh' ? 'bg-[#F97373] text-white' : 'bg-white'}`}
      >
        <span className="max-md:hidden">Chinese</span><span className="md:hidden">Ch</span>
      </a>
      <button
        onClick={() => resolvedTheme === "dark" ? setTheme('light') : setTheme("dark")}
        className={`flex items-center justify-center h-7 pr-2 pl-1 md:px-3 max-md:rounded-l-none max-md:border-l-0 rounded-[14px] text-white/60 border border-[#CFCFCF] text-[14px] text-helvetica ${resolvedTheme === "dark" ? 'bg-[#EF9B1D]' : 'bg-[#2B3E81]'}`}
      >
        <p className="max-md:hidden">{resolvedTheme === "dark" ? 'Sun mode' : 'Night Shift'}</p>
        <span className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
            <g clipPath="url(#clip0_840_8559)">
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