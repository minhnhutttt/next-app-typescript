import Aim from "./components/aim";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Promises from "./components/promises";
import Steps from "./components/steps";
export default function Home() {
  return (
    <main>
        <FV />
        <Introduction />
        <Aim />
        <Promises />
        <Steps />
    </main>
  );
}
