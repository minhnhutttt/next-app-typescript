import Case from "./components/case";
import FeaturesReasons from "./components/featuresReasons";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Overseas from "./components/overseas";
import Report from "./components/report";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <FV />
      <Introduction />
      <Overseas />
      <FeaturesReasons />
      <Report />
      <Case />
    </main>
  );
}
