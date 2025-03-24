import dynamic from 'next/dynamic';
import Fv from './components/Fv';

const DynamicFv = dynamic(() => import('./components/Fv'), {
  ssr: false
})
const DynamicIntroduction = dynamic(() => import('./components/Introduction'), {
  ssr: false
})
export default function Home() {
  
  return (
    <main className="bg-black">
      
    <DynamicFv />
      <DynamicIntroduction />
  </main>

  );
}