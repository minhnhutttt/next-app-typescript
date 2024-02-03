import FV from "./components/pages/home/fv";
import GetStarted from "./components/pages/home/getStarted";
import Service from "./components/pages/home/service";
import Scroll from "./components/scroll";

export default function Home() {
  return (
    <main>
      <FV />
      <GetStarted />
      <Service />
      <Scroll />
    </main>
  );
}
