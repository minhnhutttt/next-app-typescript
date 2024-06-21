import Fear from "./components/fear";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Recover from "./components/recover";

export default function Home() {
  return (
    <main>
      <FV />
      <Fear />
      <Recover />
      <Introduction />
    </main>
  );
}
