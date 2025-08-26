'use client';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Fv from './(index)/components/Fv';
import Introduction from './(index)/components/Introduction';
import About from './(index)/components/About';
import Business from './(index)/components/Business';
import Contact from './(index)/components/Contact';
import Product from './(index)/components/Product';
import { useSplitTextScroll } from '@/hooks/useSplitTextScroll';

export default function Home() {
  const ref = useScrollAnimations();
  useSplitTextScroll();

  return (
    <main ref={ref}>
      <Fv />
      <Introduction />
      <About />
      <Product />
      <Business />
      <Contact />
    </main>
  );
}
