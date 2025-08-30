'use client';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Fv from './(index)/components/Fv';
import Introduction from './(index)/components/Introduction';
import Benefits from './(index)/components/Benefits';
import Experience from './(index)/components/Experience';
import Step from './(index)/components/Step';
import CaseStudy from './(index)/components/CaseStudy';
import Voice from './(index)/components/Voice';

export default function Home() {
  const ref = useScrollAnimations();
  return (
    <div ref={ref}>
      <Fv />
      <Introduction />
      <Benefits />
      <Experience />
      <Step />
      <CaseStudy />
      <Voice />
    </div>
  );
}
