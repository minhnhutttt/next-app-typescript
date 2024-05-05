import FV from "./components/fv";
import SectionComparison from "./components/sectionComparison";
import SectionHealth from "./components/sectionHealth";
import SectionSupreme from "./components/sectionSupreme";
import SectionVoice from "./components/sectionVoice";

export default function Home() {
  return (
    <main>
      <FV />
      <SectionComparison />
      <SectionSupreme />
      <SectionHealth />
      <SectionVoice />
    </main>
  );
}
