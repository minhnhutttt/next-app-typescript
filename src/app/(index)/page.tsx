import About from "./components/About";
import Flow from "./components/Flow";
import Fv from "./components/Fv";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <main className="">
      <Fv />
      <About />
      <Solutions />
      <Flow />
    </main>
  );
}
