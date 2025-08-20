'use client';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Fv from './(index)/components/Fv';

export default function Home() {
  const ref = useScrollAnimations();
  return (
    <div ref={ref}>
      <Fv />
    </div>
  );
}
