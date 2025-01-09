import Ecosystem from "./components/Ecosystem";
import Fv from "./components/Fv";
import Introduction from "./components/Introduction";
import Issues from "./components/Issues";
import Letter from "./components/Letter";
import Roadmap from "./components/Roadmap";
import Solution from "./components/Solution";
import Technical from "./components/Technical";
export default function Home() {
  return (
    <main>
      <Fv />
      <Introduction />
      <Issues />
      <Solution />
      <Technical />
      <Ecosystem />
      <Roadmap />
      <Letter />
    </main>
  );
}
