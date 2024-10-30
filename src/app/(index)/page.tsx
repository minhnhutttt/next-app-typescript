import Diver from "./components/diver";
import Download from "./components/download";
import FAQ from "./components/faq/faq";
import Fees from "./components/fees";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Security from "./components/security";
import Support from "./components/support";
import Tps from "./components/tps";

export default function Home() {
  return (
    <main>
        <FV />
        <Introduction />
        <Tps />
        <Security />
        <Fees />
        <Diver />
        <div className="bg-[url('/assets/images/bg.png')] bg-[length:100%_auto]">
        <Support />
        <Download />
        <FAQ />
        </div>
    </main>
  );
}
