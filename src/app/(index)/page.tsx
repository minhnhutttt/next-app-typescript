import Cases from "./components/Cases";
import Fv from "./components/Fv";
import Sections from "./components/Sections";

import dynamic from 'next/dynamic'
const DynamicIntroduction = dynamic(() => import('./components/Introduction'), {
  ssr: false
})
export default function Home() {
  return (
    <main className="relative bg-[url(/assets/images/bg-gradient.png)] bg-[size:100%_auto] bg-no-repeat">
      <Fv />
      <Sections />
      <DynamicIntroduction />
      <Cases />
    </main>
  );
}
