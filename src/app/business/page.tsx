'use client';
import { PageHead } from '@/components/shared/PageHead';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Contact from '@/components/shared/Contact';
import Strategy from './components/Strategy';

export default function Business() {
  const ref = useScrollAnimations();
  return (
    <main ref={ref} className="overflow-hidden">
      <PageHead bg="/assets/images/business-head.png" title="Business Strategy" />
      <Strategy />
      <Contact />
    </main>
  );
}
