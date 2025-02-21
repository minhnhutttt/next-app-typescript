import Banner from "./components/Banner";
import Cases from "./components/Cases";
import Fv from "./components/Fv";
import Sections from "./components/Sections";

import dynamic from 'next/dynamic'
const DynamicJoin = dynamic(() => import('./components/Join'), {
  ssr: false
})
const DynamicIntroduction = dynamic(() => import('./components/Introduction'), {
  ssr: false
})
const DynamicInteractivity = dynamic(() => import('./components/Interactivity'), {
  ssr: false
})
export default function Home() {
  return (
    <main className="relative bg-[url(/assets/images/bg-gradient.png)] bg-[size:100%_auto] bg-no-repeat">
      <Fv />
      <div className="min-h-screen">
      <DynamicJoin />
      </div>
      <Sections />
      <DynamicIntroduction />
      <Cases />
      <DynamicInteractivity />
      <Banner />
    </main>
  );
}
