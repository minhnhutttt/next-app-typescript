import Champion from "./components/champion";
import CoinTogether from "./components/coinTogether";
import FAQ from "./components/faq/faq";
import FV from "./components/fv";
import Howto from "./components/howto";
import Introduction from "./components/introduction";
import Service from "./components/service";

export default function Home() {
  return (
    <main>
        <FV />
        <CoinTogether />
        <Introduction />
        <Service />
        <Champion />
        <Howto />
        <FAQ />
    </main>
  );
}
