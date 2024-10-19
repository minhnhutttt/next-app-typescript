import Achievements from "./components/achievements";
import Confirmation from "./components/confirmation";
import FAQ from "./components/faq/faq";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import Liver from "./components/liver";
import LiverIntroduction from "./components/liverIntroduction";
import Merit from "./components/merit";
import Process from "./components/process";
import Slider from "./components/slider";
import Treatment from "./components/treatment";
import Voice from "./components/voice";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Slider />
      <Liver />
      <LiverIntroduction />
      <Merit />
      <Achievements />
      <Voice />
      <Treatment />
      <Process />
      <Confirmation />
      <FAQ />

    </main>
  );
}
