import Benefits from "./components/benefits";
import FV from "./components/fv";
import Pack from "./components/pack";
import Plan from "./components/plan";

export default function Home() {
  return (
    <main>
      <FV />
      <Pack />
      <Benefits />
      <Plan />
    </main>
  );
}
