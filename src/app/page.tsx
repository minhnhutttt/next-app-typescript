import Fear from "./components/fear";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Recover from "./components/recover";
import Story from "./components/story";

export default function Home() {
  return (
    <main>
      <FV />
      <Fear />
      <Recover />
      <Introduction />
      <Story />
    </main>
  );
}
