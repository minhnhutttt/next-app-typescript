import Feature from "./components/pages/home/feature";
import FV from "./components/pages/home/fv";
import Guide from "./components/pages/home/guide";
import Introduction from "./components/pages/home/introduction";
import Setup from "./components/pages/home/setup";
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
    </main>
  );
}
