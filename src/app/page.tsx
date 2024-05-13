import Benefits from "./components/benefits";
import Flavors from "./components/flavors";
import FV from "./components/fv";
import Habit from "./components/habit";
import Intro from "./components/intro";
import Nutritional from "./components/nutritional";
import Work from "./components/works";

export default function Home() {
  return (
    <main>
      <FV />
      <Intro />
      <Benefits />
      <Nutritional />
      <Work />
      <Flavors />
      <Habit />
    </main>
  );
}
