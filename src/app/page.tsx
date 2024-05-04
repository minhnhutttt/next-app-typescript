import FV from "./components/fv";
import SectionComparison from "./components/sectionComparison";
import SectionHealth from "./components/sectionHealth";
import SectionSupreme from "./components/sectionSupreme";

export default function Home() {
  return (
    <main>
      <FV />
      <SectionComparison />
      <SectionSupreme />
      <SectionHealth />
    </main>
  );
}
