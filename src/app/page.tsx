'use client';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Fv from './(index)/components/Fv';
import Introduction from './(index)/components/Introduction';
import Benefits from './(index)/components/Benefits';

export default function Home() {
  const ref = useScrollAnimations();
  return (
    <div ref={ref}>
      <Fv />
      <Introduction />
      <Benefits />
    </div>
  );
}
