import Brain from "./components/brain";
import Features from "./components/features";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Roadmap from "./components/roadmap";
import Solution from "./components/solution";
import Vision from "./components/vision";

export default function Home() {
  return (
    <main>
        <FV />
        <Introduction />
        <Vision />
        <Brain />
        <Solution />
        <Features />
        <Roadmap />
    </main>
  );
}
