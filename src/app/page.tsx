import Evolution from "./components/evolution";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Story from "./components/story";
import About from "./components/about";
import Useful from "./components/useful";
import Series from "./components/series";
import Download from "./components/download";
import Tracouhunter from "./components/tracouhunter";
import FAQ from "./components/faq/faq";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <FV />
      <div className="bg-[url('/assets/images/bg.png')] bg-cover overflow-hidden">
        <Introduction />
        <Evolution />
        <Story />
        <About />
        <Useful />
        <Series />
      </div>
      <Download />
      <Tracouhunter />
      <FAQ />
    </main>
  );
}
