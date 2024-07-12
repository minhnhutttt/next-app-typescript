import FV from "./(index)/components/fv";
import Introduction from "./(index)/components/introduction";
import Skill from "./(index)/components/skill";
import Reskilling from "./(index)/components/reskilling";
import Training from "./(index)/components/training";
import Features from "./(index)/components/features";
import Learning from "./(index)/components/learning";
import Conventional from "./(index)/components/conventional";

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
    </main>
  );
}
