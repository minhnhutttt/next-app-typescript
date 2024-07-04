import Diver from "./components/diver";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Partner from "./components/partner";
import Possibility from "./components/possibility";
import Product from "./components/product";
import Sell from "./components/sell";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Diver />
      <Product />
      <Sell />
      <Possibility />
      <Partner />
    </main>
  );
}
