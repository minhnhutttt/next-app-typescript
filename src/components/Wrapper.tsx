"use client";

import { useEffect } from "react";
import { useScroll } from "@/contexts/ScrollContext";
import ScrollContainer from "@/components/scrollContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useScroll();

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }

    return () => {
      document.body.classList.remove('scroll-locked');
    };
  }, [isLoading]);

  return (
    <ScrollContainer>
      <Header />
      {children}
      <Footer />
    </ScrollContainer>
  );
}