import Use from "./components/use";
import User from "./components/user";
import Waku from "./components/waku";
import Howto from "./components/howto";
import FAQ from "./components/faq/faq";
import FV from "./components/fv";
import About from "./components/about";
import Merit from "./components/merit";

export default function Home() {
  return (
    <main>
      <FV />
      <About />
      <Merit />
      <Use />
      <User />
      <Waku />
      <Howto />
      <FAQ />
    </main>
  );
}
