import Analysis from "./components/analysis";
import Cases from "./components/cases";
import Diver from "./components/diver";
import Future from "./components/future";
import FV from "./components/fv";
import Overview from "./components/overview";
import System from "./components/system";

export default function Home() {
  return (
    <main>
        <FV />
        <Overview />
        <Analysis />
        <Diver />
        <Cases />
        <System />
        <Future />
    </main>
  );
}
