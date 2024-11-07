import All from "./components/all";
import FV from "./components/fv";
import ChildrenInNeed from "./components/childrenInNeed";
import Solution from "./components/solution";
import Roadmap from "./components/roadmap";
import Tokenomics from "./components/tokenomics";
import Howto from "./components/howto";

export default function Home() {
  return (
    <main>
        <FV />
        <All />
        <ChildrenInNeed />
        <Solution />
        <Roadmap />
        <Tokenomics />
        <Howto />
    </main>
  );
}
