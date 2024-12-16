import Atogaki from "./components/atogaki";
import FV from "./components/fv";
import Highways from "./components/highways";
import Introduction from "./components/introduction";
import Roadmap from "./components/roadmap";
import Team from "./components/team";
import Technical from "./components/technical";
import Token from "./components/token";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <FV />
      <Introduction />
      <Highways />
      <Technical />
      <Token />
        <div className="bg-[url('/assets/images/bg-roadmap.png')] bg-[size:100%_auto] bg-no-repeat bg-top">
          <div className="bg-[url('/assets/images/team-bg.png')]   bg-no-repeat bg-bottom">
            <Roadmap />
            <Team />
          </div>
        </div>
        <Atogaki />
    </main>
  );
}
