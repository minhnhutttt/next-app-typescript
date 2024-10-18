import Hero from "./components/hero";
import Introduction from "./components/introduction";
import Liver from "./components/liver";
import LiverIntroduction from "./components/liverIntroduction";
import Slider from "./components/slider";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Slider />
      <Liver />
      <LiverIntroduction />
    </main>
  );
}
