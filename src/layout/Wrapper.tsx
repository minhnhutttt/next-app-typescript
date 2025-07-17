"use client";

import { useEffect } from "react";
import { useScroll } from "@/contexts/ScrollContext";
import { usePathname } from 'next/navigation'
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useScroll();
  const pathName = usePathname();
  const isHomePage = pathName === '/';
  useEffect(() => {
    if (isLoading && isHomePage) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }

    return () => {
      document.body.classList.remove('scroll-locked');
    };
  }, [isLoading]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}