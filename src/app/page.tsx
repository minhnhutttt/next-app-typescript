import Case from "./components/case";
import Contact from "./components/contact";
import FAQ from "./components/faq/faq";
import Flow from "./components/flow";
import Functionality from "./components/functionality";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Other from "./components/other";
import PlansPricing from "./components/plansPricing";
import Service from "./components/service";
import Tracou from "./components/tracou";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Functionality />
      <Service />
      <Case />
      <div className="bg-[url('/assets/images/bg-other.png')] bg-cover">
        <Other />
        <Tracou />
      </div>
      <PlansPricing />
      <Flow />
      <Contact />
      <FAQ />
    </main>
  );
}
