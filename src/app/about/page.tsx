'use client';
import { PageHead } from '@/components/shared/PageHead';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Philosophy from './components/Philosophy';
import Leader from './components/Leader';
import Contact from '@/components/shared/Contact';

export default function About() {
  const ref = useScrollAnimations();
  return (
    <main ref={ref} className="overflow-hidden">
      <PageHead
        bg="/assets/images/about-head.png"
        title="About AIS Holdings Group"
        subtitle="Building the Infrastructure for Accessible Marketing Technology"
        text="AIS Holdings Group Inc. is a marketing technology holding company that creates and scales innovative solutions for the global marketplace. We believe that the disparity in marketing capabilities between large enterprises and smaller businesses represents one of the greatest inefficiencies in modern commerce. Our mission is to eliminate this gap through strategic investments in AI-driven marketing platforms that deliver professional results at revolutionary economics."
      />
      <Philosophy />
      <Leader />
      <Contact />
    </main>
  );
}
