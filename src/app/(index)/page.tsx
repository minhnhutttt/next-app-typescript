import Image from "next/image";
import FV from "./components/fv";
import BackgroundGradient from "@/components/backgroundGradient";
import Product from "./components/product";
import Projects from "./components/projects";
import Diver from "./components/diver";
import Consortium from "./components/consortium";
import Comparison from "./components/comparison";
import About from "./components/about";
import Roadmap from "./components/roadmap";

export default function Home() {
  return (
    <main>
      <BackgroundGradient>
      <div className="bg-[url('/assets/images/fv-bg.png')] bg-[length:100%_auto] bg-no-repeat bg-top">
        <FV />
        <Product />
        <Projects />
        <Diver />
        <Comparison />
        <Consortium />
        <section className="relative md:mt-[120px] mt-[60px] z-10 bg-[url('/assets/images/about-bg.png')] bg-cover md:rounded-t-[60px] rounded-t-[30px]">
          <About />
          <Roadmap />
        </section>
      </div>
      </BackgroundGradient>
    </main>
  );
}
