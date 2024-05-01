import Delivered from "./components/delivered";
import FV from "./components/fv";
import Habit from "./components/habit";
import Ichifuku from "./components/ichifuku";
import Introduction from "./components/introduction";
import Voice from "./components/voice";
import Workshop from "./components/workshop";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Ichifuku />
      <Workshop />
      <Delivered />
      <Habit />
      <Voice />
    </main>
  );
}
