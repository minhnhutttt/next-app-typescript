import Aim from "./components/aim";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Prices from "./components/prices";
import Promises from "./components/promises";
import Steps from "./components/steps";
import Supports from "./components/supports";
export default function Home() {
  return (
    <main>
        <FV />
        <Introduction />
        <Aim />
        <Promises />
        <Steps />
        <Supports />
        <Prices />
    </main>
  );
}
