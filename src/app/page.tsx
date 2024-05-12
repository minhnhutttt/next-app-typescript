import Benefits from "./components/benefits";
import Flavors from "./components/flavors";
import FV from "./components/fv";
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
    </main>
  );
}
