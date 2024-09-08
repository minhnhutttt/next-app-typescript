import FV from "./components/fv";
import Membership from "./components/membership";
import Introduction from "./components/introduction";
import Background from "./components/background";
import Applications from "./components/applications";
import VisionMission from "./components/visionMission";
import Challenges from "./components/challenges";
import Discover from "./components/discover";
import Contact from "./components/contact";
import Join from "./components/join";

export default function Home() {
  return (
    <main>
      <FV />
      <Membership />
      <Introduction />
      <Background />
      <Applications />
      <VisionMission />
      <Challenges />
      <Discover />
      <Contact />
      <Join />
    </main>
  );
}
