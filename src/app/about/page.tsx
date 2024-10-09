import BackgroundGradient from "@/components/backgroundGradient";
import AboutPageHead from "./components/aboutPageHead";
import AboutStrategy from "./components/aboutStrategy";
import AboutSolution from "./components/aboutSolution";
import AboutConsortium from "./components/aboutConsortium";
import AboutRoadMap from "./components/aboutRoadmap";
import AboutMessage from "./components/aboutMessage";
import PageBackground from "@/components/pageBackground";

export default function About() {
  return (
    <main>
      <BackgroundGradient>
      <PageBackground>
        <AboutPageHead />
        <AboutStrategy />
        <AboutSolution />
        <AboutConsortium />
        <AboutRoadMap />
        <AboutMessage />
        </PageBackground>
      </BackgroundGradient>
    </main>
  );
}
