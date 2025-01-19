import Assets from "./components/Assets";
import FAQ from "./components/faq/Faq";
import Features from "./components/Features";
import Fv from "./components/Fv";
import Howto from "./components/Howto";
import Introduction from "./components/Introduction";
import What from "./components/What";
export default function Home() {
  return (
    <main className="relative">
      <Fv />
      <Introduction />
      <What />
      <Features />
      <Howto />
      <Assets />
      <FAQ />
    </main>
  );
}
