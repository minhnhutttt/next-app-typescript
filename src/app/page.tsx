import FAQ from "./components/pages/home/faq/faq";
import FV from "./components/pages/home/fv";
import Introduction from "./components/pages/home/introduction";
import SectionAttention from "./components/pages/home/sectionAttention";
import SectionCampaign from "./components/pages/home/sectionCampaign";
import SectionHow from "./components/pages/home/sectionHow";
import SectionInformation from "./components/pages/home/sectionInformation";
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
      <SectionInformation />
      <SectionCampaign />
      <FAQ />
    </main>
  );
}
