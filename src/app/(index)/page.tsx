import CoinTogether from "./components/coinTogether";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Service from "./components/service";

export default function Home() {
  return (
    <main>
        <FV />
        <CoinTogether />
        <Introduction />
        <Service />
    </main>
  );
}
