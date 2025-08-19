'use client';
import { Button } from '@/components/ui/Button';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Fv from './(index)/components/Fv';

export default function Home() {
  const ref = useScrollAnimations();
  return (
    <div ref={ref} className="py-[2000px]">
      <Fv />
      <div className="fade-up space-x-2 bg-red-300">
        <Button intent="primary" size="sm">
          Primary
        </Button>
        <Button intent="secondary" size="md">
          Secondary
        </Button>
        <Button intent="danger" size="lg">
          Danger
        </Button>
      </div>
    </div>
  );
}
