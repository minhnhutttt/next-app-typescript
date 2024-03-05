import FAQ from "./components/pages/home/faq/faq";
import Feature from "./components/pages/home/feature";
import FV from "./components/pages/home/fv";
import Guide from "./components/pages/home/guide";
import Introduction from "./components/pages/home/introduction";
import Receive from "./components/pages/home/receive";
import Setup from "./components/pages/home/setup";
import Sticker from "./components/pages/home/sticker";
import Use from "./components/pages/home/use";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Feature />
      <Use />
      <Guide />
      <Setup />
      <Sticker />
      <Receive />
      <FAQ />
    </main>
  );
}
