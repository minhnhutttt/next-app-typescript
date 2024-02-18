import FV from "./components/pages/home/fv";
import Introduction from "./components/pages/home/introduction";
import SectionAttention from "./components/pages/home/sectionAttention";
import SectionHow from "./components/pages/home/sectionHow";
import SectionStart from "./components/pages/home/sectionStart";
import SectionWhat from "./components/pages/home/sectionWhat";
import SectionWhy from "./components/pages/home/sectionWhy";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <SectionHow />
      <SectionWhat />
      <SectionAttention />
      <SectionWhy />
      <SectionStart />
    </main>
  );
}
