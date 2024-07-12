import FV from "./components/fv";
import Introduction from "./components/introduction";
import Skill from "./components/skill";
import Reskilling from "./components/reskilling";
import Training from "./components/training";
import Features from "./components/features";
import Learning from "./components/learning";
import Conventional from "./components/conventional";
import Development from "./components/development";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/assets/images/bg.png')] max-md:bg-[length:87.083vw_auto] max-dt:bg-[length:47.083vw_auto] bg-no-repeat overflow-hidden">
        <FV />
        <Introduction />
      </div>
      <Skill />
      <Reskilling />
      <Conventional />
      <Training />
      <Features />
      <Learning />
      <Development />
    </main>
  );
}
