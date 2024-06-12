import About from "./components/about";
import FV from "./components/fv";
import Kizuna from "./components/kizuna";
import Memories from "./components/memories";
import Moshimo from "./components/moshimo";
import Produce from "./components/produce";
import Slider from "./components/slider";
import Voice from "./components/voice";

export default function Home() {
  return (
    <main>
      <FV />
      <Produce />
      <Memories />
      <Moshimo />
      <About />
      <Slider />
      <Voice />
      <Kizuna />
    </main>
  );
}
