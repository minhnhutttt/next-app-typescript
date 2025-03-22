"use client";

import { useState, useEffect, useRef } from "react";

interface Language {
  code: string;
}

interface LanguageDropdownProps {
  initialLanguage?: string;
  onLanguageChange?: (langCode: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  initialLanguage = "ja",
  onLanguageChange
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>(initialLanguage);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "Ja" },
    { code: "En" },
    { code: "Ch" }
  ];

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (langCode: string): void => {
    setSelectedLang(langCode);
    setIsOpen(false);
    
    if (onLanguageChange) {
      onLanguageChange(langCode);
    }
    
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLanguage = languages.find(lang => lang.code === selectedLang) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        type="button"
        className="flex items-center w-[80px] justify-center h-8 px-1.5 md:px-3  max-md:rounded-r-none rounded-[20px] bg-white border border-[#CFCFCF] text-[14px] text-helvetica"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {currentLanguage.code}
        <svg 
          className={`ml-0.5 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor" 
          aria-hidden="true"
        >
          <path 
            fillRule="evenodd" 
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-full rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className={`block w-full px-4 py-2 text-sm text-center ${
                  selectedLang === lang.code 
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                role="menuitem"
              >
                {lang.code}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;