import Aim from "./components/aim";
import FAQ from "./components/faq/faq";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Prices from "./components/prices";
import Promises from "./components/promises";
import Steps from "./components/steps";
import Supports from "./components/supports";
export default function Home() {
  return (
    <main>
        <div className="relative bg-[url('/assets/images/bg-03.png')] bg-left-bottom bg-no-repeat">
          <FV />
          <Introduction />
          <Aim />
        </div>
        <Promises />
        <Steps />
        <Supports />
        <Prices />
        <FAQ />
    </main>
  );
}
