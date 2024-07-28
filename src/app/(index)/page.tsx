import About from "./components/about";
import Contact from "./components/contact";
import Enjoy from "./components/enjoy";
import FAQ from "./components/faq/faq";
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
      <FAQ />
      <Contact />
    </main>
  );
}
