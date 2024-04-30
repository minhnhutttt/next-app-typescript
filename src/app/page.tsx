import FV from "./components/fv";
import Ichifuku from "./components/ichifuku";
import Introduction from "./components/introduction";
import Workshop from "./components/workshop";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Ichifuku />
      <Workshop />
    </main>
  );
}
