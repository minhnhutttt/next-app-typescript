import About from "./components/about";
import FAQ from "./components/faq/faq";
import Flow from "./components/flow";
import FV from "./components/fv";
import Merit from "./components/merit";
import Plans from "./components/plans";
import Risk from "./components/risk";
import Voice from "./components/voice";
import Features from "./components/features";

export default function Home() {
  return (
    <main>
        <FV />
          <About />
          <div className=" bg-[url(/assets/images/bg-2.png)]  bg-[length:100%_auto] bg-no-repeat">
          <Risk />
          <Features />
         </div>
         <div className=" bg-[url(/assets/images/bg-1.png)]  bg-[length:100%_auto] bg-no-repeat">
        <Merit />
        <Voice />
        </div>
        <Flow />
        <Plans/>
        <FAQ />
    </main>
  );
}
