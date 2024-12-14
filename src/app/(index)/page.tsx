import FV from "./components/fv";
import Highways from "./components/highways";
import Introduction from "./components/introduction";
import Roadmap from "./components/roadmap";
import Technical from "./components/technical";
import Token from "./components/token";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Highways />
      <Technical />
      <Token />
      <Roadmap />
    </main>
  );
}
