import Analysis from "./components/analysis";
import Diver from "./components/diver";
import FV from "./components/fv";
import Overview from "./components/overview";

export default function Home() {
  return (
    <main>
        <FV />
        <Overview />
        <Analysis />
        <Diver />
    </main>
  );
}
