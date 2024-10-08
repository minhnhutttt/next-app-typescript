import BackgroundGradient from "@/components/backgroundGradient";
import PageHead from "./components/pageHead";
import Strategy from "./components/strategy";
import Solution from "./components/solution";
import Consortium from "./components/consortium";

export default function About() {
  return (
    <main>
      <BackgroundGradient>
        <PageHead />
        <Strategy />
        <Solution />
        <Consortium />
      </BackgroundGradient>
    </main>
  );
}
