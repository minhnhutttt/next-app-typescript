import BackgroundGradient from "@/components/backgroundGradient";
import PageHead from "./components/pageHead";
import AboutStrategy from "./components/strategy";
import AboutSolution from "./components/solution";
import AboutConsortium from "./components/consortium";
import AboutRoadMap from "./components/roadmap";
import AboutMessage from "./components/message";

export default function About() {
  return (
    <main>
      <BackgroundGradient>
        <PageHead />
        <AboutStrategy />
        <AboutSolution />
        <AboutConsortium />
        <AboutRoadMap />
        <AboutMessage />
      </BackgroundGradient>
    </main>
  );
}
