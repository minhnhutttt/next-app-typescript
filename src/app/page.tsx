import Attention from "./components/attention";
import FV from "./components/fv";
import GoldenRatio from "./components/goldenRatio";
import Guarantee from "./components/guarantee";
import Reasons from "./components/reasons";
import Tutorial from "./components/tutorial";

export default function Home() {
  return (
    <main>
      <FV />
      <GoldenRatio />
      <Reasons />
      <Guarantee />
      <Tutorial />
      <Attention />
    </main>
  );
}
