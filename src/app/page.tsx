'use client';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Fv from './(index)/components/Fv';
import About from './(index)/components/About';
import Introduction from './(index)/components/Introduction';
import Step from './(index)/components/Step';
import Howto from './(index)/components/Howto';
import Himitsu from './(index)/components/Himitsu';
import Exchange from './(index)/components/Exchange';
import Begin from './(index)/components/Begin';
import FAQ from './(index)/components/faq/faq';

export default function Home() {
  const ref = useScrollAnimations();
  return (
    <div ref={ref}>
      <Fv />
      <About />
      <Introduction />
      <Step />
      <Howto />
      <Himitsu />
      <Exchange />
      <Begin />
      <FAQ />
    </div>
  );
}
