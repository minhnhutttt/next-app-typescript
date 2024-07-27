import About from "./components/about";
import Enjoy from "./components/enjoy";
import FV from "./components/fv";
import Howto from "./components/howto";
import Ideas from "./components/ideas";

export default function Home() {
  return (
    <main>
      <FV />
      <About />
      <Enjoy />
      <Ideas />
      <Howto />
    </main>
  );
}
