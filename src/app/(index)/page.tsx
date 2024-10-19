import Achievements from "./components/achievements";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import Liver from "./components/liver";
import LiverIntroduction from "./components/liverIntroduction";
import Merit from "./components/merit";
import Slider from "./components/slider";
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
    </main>
  );
}
