import FV from "./components/fv";
import Introduction from "./components/introduction";
import Security from "./components/security";
import Tps from "./components/tps";

export default function Home() {
  return (
    <main>
        <FV />
        <Introduction />
        <Tps />
        <Security />
    </main>
  );
}
