import FV from "./components/fv";
import VisionMission from "./components/visionMission";
import Join from "./components/join";
import Introduction from "./components/introduction";
import Applications from "./components/applications";
import Challenges from "./components/challenges";
import Reason from "./components/reason";
import Tokens from "./components/tokens";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Applications />
      <Challenges />
      <VisionMission />
      <Reason />
      <Tokens />
      <Contact />
      <Join />
    </main>
  );
}
