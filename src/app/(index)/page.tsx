import FV from "./components/fv";
import Features from "./components/features";
import Gas from "./components/gas";
import DChain from "./components/dChain";
import Works from "./components/works";
import Cases from "./components/cases";
import Roadmap from "./components/roadmap";

export default function Home() {
  return (
    <main>
      <FV />
      <Features />
      <Gas />
      <DChain />
      <Works />
      <Cases />
      <Roadmap />
    </main>
  );
}
