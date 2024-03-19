"use client"
import { useEffect, useState } from "react";

export default function Fixed() {
  const [showPopup, setshowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setshowPopup(true);
      } else {
        setshowPopup(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`fixed right-1 bottom-6 md:bottom-10 z-50 duration-500 ${showPopup ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <a href="/" className="flex animate-[health_1s_ease_infinite_alternate]">
            <img className="max-md:w-[200px]" src="/images/bubble-fixed.png" alt="" />
        </a>
    </div>
  );
}
