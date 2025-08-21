'use client';
import { PageHead } from '@/components/shared/PageHead';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Contact from '@/components/shared/Contact';
import Overview from './components/Overview';
import Seikai from './components/Seikai';
import Market from './components/Market';

export default function Group() {
  const ref = useScrollAnimations();
  return (
    <main ref={ref} className="overflow-hidden">
      <PageHead bg="/assets/images/group-head.png" title="Group Companies" />
      <Overview />
      <Seikai />
      <Market />
      <Contact />
    </main>
  );
}
