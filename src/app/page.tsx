import Card from "./components/pages/home/card";
import FV from "./components/pages/home/fv";
import GetStarted from "./components/pages/home/getStarted";
import Service from "./components/pages/home/service";
import Talk from "./components/pages/home/talk";
import WorkFlow from "./components/pages/home/workFlow";

export default function Home() {
  return (
    <main>
      <FV />
      <GetStarted />
      <Service />
      <WorkFlow />
      
    </main>
  );
}
