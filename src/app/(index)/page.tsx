import About from "./components/About";
import Flow from "./components/Flow";
import Fv from "./components/Fv";
import Roadmap from "./components/Roadmap";
import Security from "./components/Security";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Token from "./components/Token";

export default function Home() {
  return (
    <main className="">
      <Fv />
      <About />
      <Solutions />
      <Flow />
      <Services />
      <Token />
      <Security />
      <Roadmap />
    </main>
  );
}
