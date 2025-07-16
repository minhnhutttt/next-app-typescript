import About from "./components/About";
import Brands from "./components/Brands";
import Fv from "./components/Fv";
import Signature from "./components/Signature";
import Speaking from "./components/Speaking";
import Press from "./components/Press";
import Author from "./components/Author";

export default function Home() {
  return (
    <main className="bg-white relative">
      <Fv />
      <About />
      <Brands />
      <Signature />
      <Speaking />
      <Press />
      <Author />
    </main>
  );
}
