import Anchors from "./components/pages/home/anchors";
import Fixed from "./components/pages/home/fixed";
import FV from "./components/pages/home/fv";
import Line from "./components/pages/home/line";
import SectionError from "./components/pages/home/sectionError";
import SectionFeatures from "./components/pages/home/sectionFeatures";
import SectionPopular from "./components/pages/home/sectionPopular";
import SectionPrice from "./components/pages/home/sectionPrice";
import SectionVoice from "./components/pages/home/sectionVoice";

export default function Home() {
  return (
    <main>
      <FV />
      <Line />
      {/* <Fixed /> */}
      <Anchors />
      <div className="bg-[url('/images/deco.png')] bg-[#FFF0A6] bg-[length:100%_auto] px-5 md:mt-[160px] mt-[80px] md:pt-[76px] pt-10 md:space-y-[100px] space-y-[60px]">
        <SectionError />
        <SectionFeatures />
        <SectionPrice />
        <SectionPopular />
        <SectionVoice />
      </div>
    </main>
  );
}
