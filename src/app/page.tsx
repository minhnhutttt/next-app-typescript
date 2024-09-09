import FV from "./components/fv";
import Introduction from "./components/introduction";
import Background from "./components/background";
import Applications from "./components/applications";
import VisionMission from "./components/visionMission";
import Challenges from "./components/challenges";
import Discover from "./components/discover";
import Join from "./components/join";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Background />
      <Applications />
      <VisionMission />
      <Challenges />
      <Discover />
      <Join />
    </main>
  );
}
