import Fv from "./components/Fv";
import dynamic from 'next/dynamic'
const DynamicFv = dynamic(() => import('./components/Fv'), {
  ssr: false
})
const DynamicIntroduction = dynamic(() => import('./components/Introduction'), {
  ssr: false
})
export default function Home() {
  return (
    <main className="relative ">
      <DynamicFv />
      <DynamicIntroduction />
    </main>
  );
}
