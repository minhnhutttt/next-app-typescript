import Image from "next/image";
import FV from "./components/pages/home/fv";
import Procedure from "./components/pages/home/procedure";
import Certificate from "./components/pages/home/certificate";
import Talk from "./components/pages/home/talk";
import Reason from "./components/pages/home/reason";
import Campaign from "./components/pages/home/campaign";
import Explanation from "./components/pages/home/explanation";
import Power from "./components/pages/home/power";
import Suggestion from "./components/pages/home/suggestion";
import Introduction from "./components/pages/home/introduction";
import Preparation from "./components/pages/home/preparation";
import Voice from "./components/pages/home/voice";
import Use from "./components/pages/home/use";
import Mind from "./components/pages/home/mind";
import Line from "./components/pages/home/line";
import FAQ from "./components/pages/home/faq/faq";

export default function Home() {
  return (
    <main>
      <FV />
      <Procedure />
      <Certificate />
      <Talk />
      <Reason />
      <Campaign />
      <Explanation />
      <Power />
      <Suggestion />
      <Introduction />
      <Preparation />
      <Voice />
      <Use />
      <Mind />
      <Line />
      <FAQ />
    </main>
  );
}
