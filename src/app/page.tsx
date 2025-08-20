'use client';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Fv from './(index)/components/Fv';
import Introduction from './(index)/components/Introduction';
import Marketing from './(index)/components/Marketing';
import Group from './(index)/components/Group';
import Global from './(index)/components/Global';
import Innovation from './(index)/components/Innovation';

export default function Home() {
  const ref = useScrollAnimations();
  return (
    <main ref={ref} className="overflow-hidden">
      <Fv />
      <Introduction />
      <Marketing />
      <Group />
      <Global />
      <Innovation />
    </main>
  );
}
